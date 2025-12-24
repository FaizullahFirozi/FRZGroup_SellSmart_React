import React from "react";
import { router } from '@inertiajs/react';

const Pagination = ({ links, currentPage, setCurrentPage }) => {
    const handelPageChange = (url) => {
        if (url) {
            const page = new URL(url).searchParams.get("page");
            setCurrentPage(Number(page));
            router.get(url, { preserveState: true });
        }
    };

    return (
        <nav aria-label="Page navigation" className="flex justify-center mt-4 float-right">
            <ul className="inline-flex items-center -space-x-px">
                {links.map((link, index) => (
                    <li key={index}>
                        <button
                            onClick={() => 
                                handelPageChange(link.url)}
                            disabled={!link.url}

                            className={`px-3 py-2 leading-tight border ${
                                link.active
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                            } ${
                                !link.url
                                    ? "cursor-not-allowed opacity-50"
                                    : "cursor-pointer"
                            }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        ></button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;