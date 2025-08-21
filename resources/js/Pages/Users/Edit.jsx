import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import TextInput from "@/Components/TextInput";
import { BackButton } from "@/Components/BackButton";

export default function Edit({ auth, usersData }) {
    const { data, setData, put, errors } = useForm({


        id: usersData.id,
        name: usersData.name,
        email: usersData.email,
        phone: usersData.phone,
        avatar: null,
    });

    const [loading, setLoading] = useState(false);

    function submit(e) {
        e.preventDefault();
        setLoading(true); // Set loading to true
        put(route("users.update", { user: data.id }), {
            onFinish: () => setLoading(false), // Reset loading state after submission
        });
    }

    return (
        <Authenticated user={auth.user} header={<h2>Edit User </h2>}>
            <Head title="Edit User" />
            <form
                onSubmit={submit}
                className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
            >
                  <div className="flex w-full flex-col">
                    <div className="divider divider-primary font-bold">د کارکوونکي ټول مشخصات تغیر کول</div>
                </div>
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        User Name
                    </label>
                    <TextInput
                        autoFocus={true}
                        type="text"
                        placeholder="د کارمند نوم ولیکئ"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={data.name}
                        onChange={(e) =>
                            setData("name", e.target.value)
                        }
                    />
                    {errors.name && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.name}
                        </div>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="company_address"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Company Address
                    </label>
                    <TextInput
                        type="text"
                        placeholder="د شرکت ادرس ولیکئ"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={data.company_address}
                        onChange={(e) =>
                            setData("company_address", e.target.value)
                        }
                    />
                    {errors.company_address && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.company_address}
                        </div>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="company_email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Company Email
                    </label>
                    <TextInput
                        type="email"
                        placeholder="د شرکت ایمیل ولیکئ"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={data.company_email}
                        onChange={(e) =>
                            setData("company_email", e.target.value)
                        }
                    />
                    {errors.company_email && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.company_email}
                        </div>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="company_phone"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Company Phone
                    </label>
                    <TextInput
                        type="text"
                        placeholder="د شرکت د اړیکې شمیره ولیکئ"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={data.company_phone}
                        onChange={(e) =>
                            setData("company_phone", e.target.value)
                        }
                    />
                    {errors.company_phone && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.company_phone}
                        </div>
                    )}
                </div>

                <div>
                    <img
                        src={"../../storage/" + usersData.avatar}
                        alt=""
                        style={{ width: "240px" }}
                    />
                </div>
                <div>
                    <label
                        htmlFor="company_logo"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Company Logo
                    </label>
                    <TextInput
                        type="file"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        onChange={(e) =>
                            setData("company_logo", e.target.files[0])
                        }
                    />
                    {errors.company_logo && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.company_logo}
                        </div>
                    )}
                </div>
                <div className="text-center">
                    <button
                        className={`btn ml-5 btn-wide btn-success btn-outline btn-sm btn-dash rounded-full ${
                            loading ? "bg-gray-400 cursor-not-allowed" : ""
                        }`}
                        type="submit"
                        disabled={loading} // Disable button when loading
                    >
                        {loading ? "تغیراتو په حال کي ..." : "تغیر کول"}
                        </button>
                    <BackButton className="btn-wide btn-sm btn-error" />
                </div>
            </form>
        </Authenticated>
    );
}
