import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import TextInput from "@/Components/TextInput";
import { BackButton } from "@/Components/BackButton";

export default function Add({ auth }) {
    const { data, setData, post, errors } = useForm({
        expense_name: "",
        expense_date: "",
        expense_amount: null,
        expense_amount_currency:  "افغانی" ,
    });

    const [loading, setLoading] = useState(false);

    function submit(e) {
        e.preventDefault();
        setLoading(true); // Set loading to true
        post(route("expenses.store"), {
            onFinish: () => setLoading(false), // Reset loading state after submission
        });
    }

    return (
        <Authenticated user={auth.user} header={<h2>Add New Expense </h2>}>
            <Head title="Add Expense" />
            <form
                onSubmit={submit}
                className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
            >
                <div className="flex w-full flex-col">
                    <div className="divider divider-success font-bold">
                        د مصارفاتو ټول مشخصات اضافه کول
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="expense_name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <TextInput
                        autoFocus={true}
                        required
                        type="text"
                        placeholder="د مصرف تشریح ولیکئ"
                        minlength="3"
                        className="input validator mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={data.expense_name}
                        onChange={(e) =>
                            setData("expense_name", e.target.value)
                        }
                    />
                    <p className="validator-hint">د مصرف ملومات ضروري دی</p>
                    {errors.expense_name && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.expense_name}
                        </div>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="expense_date"
                        className="block text-sm font-medium text-gray-700"
                    >
                        د مصارفاتو تاریخ
                    </label>
                    <TextInput
                        type="date"
                        placeholder="د مصرف تاریخ ولیکئ"
                        required
                        className="input validator mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={data.expense_date}
                        onChange={(e) =>
                            setData("expense_date", e.target.value)
                        }
                    />
                    {errors.expense_date && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.expense_date}
                        </div>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="expense_amount"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Expense Amount
                    </label>
                    <TextInput
                        required
                        type="number"
                        placeholder="Enter amount"
                        className="input mt-1 block w-full"
                        value={data.expense_amount}
                        onChange={(e) =>
                            setData("expense_amount", e.target.value)
                        }
                    />
                    {errors.expense_amount && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.expense_amount}
                        </div>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="expense_amount_currency"
                        className="block text-sm font-medium text-gray-700"
                    >
                     نوع (دالر / افغانی / کلدار)  
                    </label>
                    <select
                        required
                        className="input mt-1 block w-full"
                        value={data.expense_amount_currency}
                        onChange={(e) =>
                            setData("expense_amount_currency", e.target.value)
                        }
                    >
                        <option value="" disabled>د پیسو ډول انتخاب کړئ</option>
                        <option value="افغانی">افغانی</option>
                        <option value="دالر">دالر</option>
                        <option value="کلدار">کلدار</option>
                    </select>
                    {errors.expense_amount_currency && (
                        <div className="text-sm text-red-600 mt-1">
                            {errors.expense_amount_currency}
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
                        {loading ? "ثبت په حالت کي ..." : "ثبت"}
                    </button>
                    <BackButton className="btn-wide btn-sm btn-error" />
                </div>
            </form>
        </Authenticated>
    );
}
