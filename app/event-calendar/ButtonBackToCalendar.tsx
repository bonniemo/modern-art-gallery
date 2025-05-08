"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useViewport } from "@/hooks/useViewport";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function ButtonBackToCalendar() {
    const { width } = useViewport();
    const buttonText = width && width > 756 ? "back to calendar" : "back";

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            router.push("/event-calendar");
        }, 300);
    };

    return (
        <button
            onClick={handleClick}
            className="flex items-center w-max h-16 drop-shadow-2xl group"
            aria-label="Return to event calendar"
        >
            <div className="bg-accent h-full flex items-center px-2 group-hover:bg-dark">
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <IoIosArrowBack className="text-2xl text-light" />
                )}
            </div>
            <div className="bg-dark px-4 h-full flex justify-center items-center group-hover:bg-accent">
                <p className="uppercase text-light text-p-s leading-body-s font-extrabold">
                    {buttonText}
                </p>
            </div>
        </button>
    );
}
