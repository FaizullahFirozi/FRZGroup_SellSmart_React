import React from "react";
import { usePage } from "@inertiajs/react";

export function BackButton({ text = "Go", className = "" }) {
    const { url } = usePage(); // Get the current page's URL

  // Conditionally render the button only if the URL is not "/profile"
  if (url === "/dashboard") {
    return null; // Do not render the button
}

return (
    <button
        title="شاته لاړ شئ"
        onClick={() => window.history.back()} 
        className={`btn btn-xs btn-dash btn-accent rounded-full ${className}`} // Default styling with Tailwind and DaisyUI
    >
        {text}

        {/* Back Icon */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-3 h-3"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
        </svg>
    </button>
    );
}