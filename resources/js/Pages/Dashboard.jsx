import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard FRZ" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            د تجارتي شرکت سیسټم ته
                            ښه راغلاست ګرانه!
                        </div>
                    </div>
                </div>
            </div>

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
                <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
                    Button
                </button>
                <button className="btn btn-primary">Button</button>
                <button className="btn w-64 bg-black text-white rounded-full">
                    Button
                </button>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                                <input
                                    className="input validator"
                                    type="email"
                                    required
                                    placeholder="mail@site.com"
                                />
                                <div className="validator-hint">
                                    Enter valid email address
                                </div>
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
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Hart Hagerty
                                        </div>
                                        <div className="text-sm opacity-50">
                                            United States
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Desktop Support Technician
                                </span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    details
                                </button>
                            </th>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Brice Swyre
                                        </div>
                                        <div className="text-sm opacity-50">
                                            China
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Carroll Group
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Tax Accountant
                                </span>
                            </td>
                            <td>Red</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    details
                                </button>
                            </th>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Marjy Ferencz
                                        </div>
                                        <div className="text-sm opacity-50">
                                            Russia
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Rowe-Schoen
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Office Assistant I
                                </span>
                            </td>
                            <td>Crimson</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    details
                                </button>
                            </th>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Yancy Tear
                                        </div>
                                        <div className="text-sm opacity-50">
                                            Brazil
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Wyman-Ledner
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Community Outreach Specialist
                                </span>
                            </td>
                            <td>Indigo</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    details
                                </button>
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

        </AuthenticatedLayout>
    );
}
