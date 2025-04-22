"use client";
import { useViewport } from "@/hooks/useViewport";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const ButtonBackToCalendar = () => {
    const { width } = useViewport();
    const buttonText = width && width > 756 ? "back to calendar" : "back";
    return (
        <Link
            href="/event-calendar"
            className="flex items-center w-max h-16 drop-shadow-2xl group"
        >
            <div className="bg-accent h-full flex items-center px-2 group-hover:bg-dark">
                <IoIosArrowBack className="text-2xl text-light" />
            </div>
            <div className="bg-dark px-4 h-full flex justify-center items-center group-hover:bg-accent">
                <p className="uppercase text-light text-p-s leading-body-s font-extrabold">
                    {buttonText}
                </p>
            </div>
        </Link>
    );
};

export default ButtonBackToCalendar;
