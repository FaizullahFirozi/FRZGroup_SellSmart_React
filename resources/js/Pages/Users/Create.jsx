import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import TextInput from "@/Components/TextInput";
import { BackButton } from "@/Components/BackButton";

export default function Add({ auth }) {
    const { data, setData, post, errors } = useForm({
        name: "",
        company_address: "",
        last_name: "",
        companies_id: "",
        email: "",
        phone: "",
        password: "",
        avatar: null,
    });

    const [loading, setLoading] = useState(false);

    function submit(e) {
        e.preventDefault();
        setLoading(true); // Set loading to true
        post(route("users.store"), {
            onFinish: () => setLoading(false), // Reset loading state after submission
        });
    }

    return (
        <Authenticated user={auth.user} header={<h2>Add New User </h2>}>
            <Head title="Add Company" />
            <form
                onSubmit={submit}
                className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
            >
                
                <div className="flex w-full flex-col">
                    <div className="divider divider-success font-bold">د کارکوونکي ټول مشخصات اضافه کول</div>
                </div>
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                         Name
                    </label>
                    <TextInput
                        autoFocus={true}
                        required
                        type="text"
                        placeholder="د کارمندب نوم ولیکئ"
                        minlength="3"
                        className="input validator mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={data.name}
                        onChange={(e) =>
                            setData("name", e.target.value)
                        }
                    />
                    <p className="validator-hint">د کارمند نوم ضروري دی</p>
                    {errors.name && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.name}
                        </div>
                    )}
                </div>

    

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        User Email
                    </label>
                    <TextInput
                        type="email"
                        placeholder="د کارمند ایمیل ولیکئ"
                        required
                        className="input validator mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={data.email}
                        onChange={(e) =>
                            setData("email", e.target.value)
                        }
                    />
                    {errors.email && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.email}
                        </div>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Company Phone
                    </label>
                    <TextInput
                        type="tel"
                        placeholder="د شرکت د اړیکې شمیره ولیکئ"
                        className="input validator tabular-nums mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        pattern="[0-9]*"
                        minlength="10"
                        maxlength="10"
                        title="باید 10 عدده وي"
                        value={data.phone}
                        onChange={(e) =>
                            setData("phone", e.target.value)
                        }
                    />
                    <p className="validator-hint">Must be 10 digits</p>
                    {errors.phone && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.phone}
                        </div>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="avatar"
                        className="block text-sm font-medium text-gray-700"
                    >
                        د کارمند عکس
                    </label>

                    <TextInput
                        type="file"
                        onChange={(e) =>
                            setData("avatar", e.target.files[0])
                        }
                        className="file-input w-full file-input-info"
                    />

                    {errors.avatar && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.avatar}
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
