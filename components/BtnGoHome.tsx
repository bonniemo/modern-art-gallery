"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import LoadingSpinner from "./LoadingSpinner";

const BtnGoHome = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            router.push("/");
        }, 300);
    };

    return (
        <button
            onClick={handleClick}
            className="flex items-center w-max h-16 group"
            aria-label="Navigate back to home page"
        >
            <div
                className="bg-accent h-full flex items-center px-2 group-hover:bg-dark"
                aria-hidden="true"
            >
                {loading ? (
                    <LoadingSpinner color="light" />
                ) : (
                    <IoIosArrowBack className="text-2xl text-light" />
                )}
            </div>
            <div className="bg-dark h-full w-52 flex justify-center items-center group-hover:bg-accent">
                <p className="uppercase text-light text-p-s leading-body-s font-extrabold">
                    Back to home
                </p>
            </div>
        </button>
    );
};

export default BtnGoHome;
