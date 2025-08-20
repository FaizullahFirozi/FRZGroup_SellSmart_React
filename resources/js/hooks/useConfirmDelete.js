import Swal from "sweetalert2";
import { router } from "@inertiajs/react";

export const useConfirmDelete = () => {
    const confirmDelete = (routeName, params, successMessage = "Deleted successfully!") => {
        Swal.fire({
            title: "حذف کوی یی؟",
            text: "بیا نشی کولای چی بیرته یی پیدا کړی!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "هو  Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route(routeName, params), {
                    onSuccess: () => {
                        Swal.fire({
                            title: "حذف شو!",
                            text: successMessage,
                            icon: "success",
                            timer: 1500
                        });
                    },
                });
            }
        });
    };

    return { confirmDelete };
};