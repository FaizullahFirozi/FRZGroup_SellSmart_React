import { Button } from "@/Components/Button";
import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useConfirmDelete } from "@/hooks/useConfirmDelete";


export default function Index({ auth, expensesData, flash }) {
    const {
        data,
        setData,
        get,
        delete: destroy,
    } = useForm({
        name: "",

        page: expensesData.currentPage,
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
                get(route("expenses"), {
                    preserveState: true,
                    name: data.name,
                    page: data.page,
                });
            }, 1000) // 5 seconds delay
        );
    };

    const { confirmDelete } = useConfirmDelete();

    const handleDelete = (userId) => {
        confirmDelete("expenses.destroy", { id: userId }, "کارمند په بریالی توګه ډیلیټ شو.");
    };

    return (
        <Authenticated user={auth.user} header={<h3>Users List</h3>}>
            <Head title="روزانه مصارف" />
            <ToastContainer className={"m-5"} />
            <Link href={route("expenses.create")}>
                <button
                    className="btn btn-dash btn-secondary rounded-full
                "
                >
                    مصارف اضافه کړئ
                </button>
            </Link>
            <input
                className="input file-input-ghost"
                type="text"
                name="company_name"
                value={data.company_name}
                onChange={handleFilterChange}
                placeholder="Search Here By Expense Name"
            />

            <table className="min-w-full mt-5 border-separate border border-gray-200 shadow-xl">
                <thead className="bg-gray-300">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 font-bold text-gray-700">
                            #
                        </th>
                        <th className="border border-gray-300 px-4 py-2 font-bold text-gray-700">
                             د مصارف نوم
                        </th>
                        <th className="border border-gray-300 px-4 py-2 font-bold text-gray-700">
                            پيسی 
                        </th>
                        <th className="border border-gray-300 px-4 py-2 font-bold text-gray-700">
                             نوعه
                        </th>
                        <th className="border border-gray-300 px-4 py-2 font-bold text-gray-700">
                            تاریخ
                        </th>
                        <th className="border border-gray-300 px-4 py-2 font-bold text-gray-700">
                            عمومي
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {expensesData.data.map((items) => (
                        <tr
                            key={items.id}
                            className="odd:bg-white even:bg-gray-50 *:hover:bg-gray-100 text-center"
                        >
                            <td className="border border-gray-300 px-4 py-2">
                                {items.id}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-right">
                                {items.expense_name}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 font-bold">
                                {items.expense_amount}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-indigo-600 font-bold text-xs">
                                {items.expense_amount_currency}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <span className="text-indigo-600 font-bold text-xs">

                                {items.expense_date}
                                </span>
                            </td>
                            
                            <td className="border border-gray-300 px-4 py-2">
                                <Link href={route("expenses.edit", items.id )}>
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
                        </tr>
                    ))}
                </tbody>
            </table>
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
            <Pagination
                links={expensesData.links}
                currentPage={expensesData.currentPage}
                setCurrentPage={(page) => setData("page", page)}
            />
        </Authenticated>
    );
}
