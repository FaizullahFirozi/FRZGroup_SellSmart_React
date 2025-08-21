import { Button } from "@/Components/Button";
import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useConfirmDelete } from "@/hooks/useConfirmDelete";


export default function Index({ auth, companiesData, flash }) {
    const {
        data,
        setData,
        get,
        delete: destroy,
    } = useForm({
        company_name: "",

        page: companiesData.currentPage,
    });

    useEffect(() => {
        if (flash.message.success) {
            toast.success(flash.message.success);
        }
        if (flash.message.error) {
            toast.error(flash.message.error);
        }
    }, [flash]);

    const [typingTimeout, setTypingTimeout] = useState(null);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;

        // Update the form data
        setData(name, value);

        // Clear the previous timeout
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        // Set a new timeout to send the request after 5 seconds
        setTypingTimeout(
            setTimeout(() => {
                get(route("companies"), {
                    preserveState: true,
                    company_name: data.company_name,
                    page: data.page,
                });
            }, 1000) // 5 seconds delay
        );
    };

    const { confirmDelete } = useConfirmDelete();

    const handleDelete = (companyId) => {
        confirmDelete("companies.destroy", { id: companyId }, "شرکت په بریالی توګه ډیلیټ شو.");
    };

    return (
        <Authenticated user={auth.user} header={<h3>Companies List</h3>}>
            <Head title="Companies" />
            <ToastContainer className={"m-5"} />
            <Link href={route("companies.create")}>
                <button
                    className="btn btn-dash btn-secondary rounded-full
                "
                >
                    شرکت اضافه کړئ
                </button>
            </Link>
            <input
                className="input file-input-ghost"
                type="text"
                name="company_name"
                value={data.company_name}
                onChange={handleFilterChange}
                placeholder="Search Here By Company Name"
            />

            <table className="min-w-full mt-5 border-collapse border border-gray-200 shadow-md">
                <thead className="bg-gray-300">
                    <tr>
                        <th className="border border-gray-400 px-4 py-2 font-bold text-gray-700">
                            #
                        </th>
                        <th className="border border-gray-400 px-4 py-2 font-bold text-gray-700">
                            شرکت نوم
                        </th>
                        <th className="border border-gray-400 px-4 py-2 font-bold text-gray-700">
                            شرکت آدرس
                        </th>
                        <th className="border border-gray-400 px-4 py-2 font-bold text-gray-700">
                            شرکت د اړیکې شمیره
                        </th>
                        <th className="border border-gray-400 px-4 py-2 font-bold text-gray-700">
                            شرکت ایمیل آدرس
                        </th>
                        <th className="border border-gray-400 px-4 py-2 font-bold text-gray-700">
                            شرکت لوګو
                        </th>
                        <th className="border border-gray-400 px-4 py-2 font-bold text-gray-700">
                            عمومي
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {companiesData.data.map((items) => (
                        <tr
                            key={items.id}
                            className="odd:bg-white even:bg-gray-50"
                        >
                            <td className="border border-gray-300 px-4 py-2">
                                {items.id}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {items.company_name}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {items.company_address}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {items.company_phone}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {items.company_email}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <div className=" avatar hover:cursor-pointer hover:opacity-80">
                                    <div className="ring-info text-center ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                                        <img
                                            onClick={() =>
                                                document
                                                    .getElementById(
                                                        `modal_${items.id}`
                                                    ) // Use a unique id for each modal
                                                    .showModal()
                                            }
                                            alt="Logo"
                                            src={
                                                "storage/" + items.company_logo
                                            }
                                        />
                                    </div>
                                </div>
                                {/* یو ډیالوګ دی ګی کله په عکس کلیک وکړی دغه عکس غټ ښیی */}
                                <dialog
                                    id={`modal_${items.id}`}
                                    className="modal"
                                >
                                    {" "}
                                    {/* Unique id */}
                                    <div className="modal-box ">
                                        <img
                                            alt="Company Logo"
                                            src={
                                                "storage/" + items.company_logo
                                            }
                                        />
                                    </div>
                                    <form
                                        method="dialog"
                                        className="modal-backdrop"
                                    >
                                        <button>close</button>
                                    </form>
                                </dialog>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link href={route("companies.edit", items.id )}>
                                    <button className="btn btn-xs rounded-full  btn-soft btn-accent btn-wide">
                                        Edit
                                    </button>
                                </Link>
                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("MyModal")
                                            .showModal()
                                    }
                                    className="btn btn-xs rounded-full  btn-dash btn-warning btn-wide"
                                >
                                    Show
                                </button>
                                <button
                                    onClick={() => handleDelete(items.id)}
                                    className="btn btn-xs rounded-full  btn-soft btn-secondary btn-wide"
                                >
                                    Delete
                                </button>
                            </td>
                            <dialog id="MyModal" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle hover:text-red-600 btn-ghost absolute left-2 top-2">
                                            ✕
                                        </button>
                                    </form>
                                    <h3 className="font-bold text-lg text-indigo-600">
                                        سلامونه!
                                    </h3>
                                    <p className="py-4">
                                        د ماډل بند کولو لپاره اسکپ یا د کراس
                                        توکمه ووهئ
                                        <br />
                                        Press ESC key or click on ✕ button to
                                        close
                                    </p>
                                </div>
                            </dialog>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                links={companiesData.links}
                currentPage={companiesData.currentPage}
                setCurrentPage={(page) => setData("page", page)}
            />
        </Authenticated>
    );
}
