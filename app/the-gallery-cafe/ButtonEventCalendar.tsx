"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const ButtonEventCalendar = () => {
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
            className="flex items-center w-max h-16 drop-shadow-lg group"
            aria-label="Navigate to our event calendar"
        >
            <div className="bg-dark px-4 h-full flex justify-center items-center group-hover:bg-accent">
                <p className="uppercase text-light text-p-s leading-body-s font-extrabold">
                    Our event calendar
                </p>
            </div>
            <div className="bg-accent h-full flex items-center px-2 group-hover:bg-dark">
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <IoIosArrowForward className="text-2xl text-light" />
                )}
            </div>
        </button>
    );
};

export default ButtonEventCalendar;
