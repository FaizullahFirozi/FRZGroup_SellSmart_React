import { Button } from "@/Components/Button";
import Pagination from "@/Components/Pagination";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React, {useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Index({ auth, companies, flash }) {
    useEffect(() => {
        if (flash.message.success) {
            toast.success(flash.message.success);
        }
        if (flash.message.error) {
            toast.error(flash.message.error);
        }
    }, [flash]);

    const { data, setData, get } = useForm({
        company_name: "",
        
        page: companies.currentPage,
    });
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
                get(route("company"), {
                    preserveState: true,
                    company_name: data.company_name,
                    page: data.page,
                });
            }, 1000) // 5 seconds delay
        );
    };

    return (
        <Authenticated user={auth.user} header={<h3>Companies List</h3>}>
            <Head title="Companies" />
            <ToastContainer className={"m-5"} />
            <Link href={route("company.add")}>
                <Button>شرکت اضافه کړئ</Button>
            </Link>
            <button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button>

<button className="btn btn-dash">Default</button>
<button className="btn btn-dash btn-primary">Primary</button>
<button className="btn btn-dash btn-secondary">Secondary</button>
<button className="btn btn-dash btn-accent">Accent</button>
<button className="btn btn-dash btn-info">Info</button>
<button className="btn btn-dash btn-success">Success</button>
<button className="btn btn-dash btn-warning">Warning</button>
<button className="btn btn-dash btn-error">Error</button>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
          <input className="input validator" type="email" required placeholder="mail@site.com" />
<div className="validator-hint">Enter valid email address</div>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br />
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br />
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br />
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>


            <table className="min-w-full mt-5 border-collapse border border-gray-200 shadow-md">
                <thead className="bg-gray-300">
                    <tr>
                        <th className="border border-gray-400 px-4 py-2 font-bold text-gray-700">
                            #
                        </th>
                        <th className="border border-gray-400 px-4 py-2 font-bold text-gray-700">
                            <label htmlFor="conpany name"> Company name</label>
                            <input
                                type="text"
                                name="company_name"
                                value={data.company_name}
                                onChange={handleFilterChange}
                                placeholder="Filter By Company Name"
                            />
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
                    {companies.data.map((company) => (
                        <tr
                            key={company.id}
                            className="odd:bg-white even:bg-gray-50"
                        >
                            <td className="border border-gray-300 px-4 py-2">
                                {company.id}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {company.company_name}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {company.company_address}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {company.company_phone}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {company.company_email}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <img
                                    src={"storage/" + company.company_logo}
                                    style={{ width: "80px" }}
                                    alt="img"
                                    className="h-10 w-10 object-cover"
                                />
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link href={"company/edit/" + company.id}>
                                    {" "}
                                    Edit{" "}
                                </Link>
                                {/* <Link href={route("company.edit", company.id)}> Edit </Link> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                links={companies.links}
                currentPage={companies.currentPage}
                setCurrentPage={(page) => setData("page", page)}
            />
        </Authenticated>
    );
}
