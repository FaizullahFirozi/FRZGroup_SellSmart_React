import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { BackButton } from "@/Components/BackButton";

export default function Add({ auth }) {
    const { data, setData, post, errors } = useForm({
        company_name: "",
        company_address: "",
        contact_email: "",
        company_phone: "",
        company_logo: null,
    });

    const [loading, setLoading] = useState(false);

    function submit(e) {
        e.preventDefault();
        setLoading(true); // Set loading to true
        post(route("company.store"), {
            onFinish: () => setLoading(false), // Reset loading state after submission
        });
    }

    return (
        <Authenticated user={auth.user} header={<h2>Add New Company </h2>}>
            <Head title="Add Company" />
            <form
                onSubmit={submit}
                className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
            >
                <div>
                    <label
                        htmlFor="company_name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Company Name
                    </label>
                    <TextInput
                        autoFocus={true}
                        type="text"
                        placeholder="د شرکت نوم ولیکئ"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={data.company_name}
                        onChange={(e) =>
                            setData("company_name", e.target.value)
                        }
                    />
                    {errors.company_name && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.company_name}
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
                        htmlFor="contact_email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Company Email
                    </label>
                    <TextInput
                        type="email"
                        placeholder="د شرکت ایمیل ولیکئ"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={data.contact_email}
                        onChange={(e) =>
                            setData("contact_email", e.target.value)
                        }
                    />
                    {errors.contact_email && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.contact_email}
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
                    <label
                        htmlFor="company_logo"
                        className="block text-sm font-medium text-gray-700"
                    >
                        د شرکت / کمپني لوګو
                    </label>
                   
                    <TextInput
                        type="file"
                        onChange={(e) =>
                            setData("company_logo", e.target.files[0])
                        }
                        className="file-input w-full file-input-info"
                    />

                    {errors.company_logo && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.company_logo}
                        </div>
                    )}
                </div>

                <div className="text-center">
                    <button
                        className={`btn ml-5 btn-wide btn-accent btn-outline btn-sm btn-dash rounded-full ${
                            loading ? "bg-gray-400 cursor-not-allowed" : ""
                        }`}
                        type="submit"
                        disabled={loading} // Disable button when loading
                    >
                        {loading ? "ثبت ..." : "ثبت"}
                    </button>
                    <BackButton className="btn-wide btn-sm btn-error" />
                </div>
            </form>
        </Authenticated>
    );
}
