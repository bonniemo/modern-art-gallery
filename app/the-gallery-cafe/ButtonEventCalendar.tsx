"use client";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const ButtonEventCalendar = () => {
    return (
        <Link
            href="/event-calendar"
            className="flex items-center w-max h-16 drop-shadow-lg group"
        >
            <div className="bg-dark px-4 h-full flex justify-center items-center group-hover:bg-accent">
                <p className="uppercase text-light text-p-s leading-body-s font-extrabold">
                    Our event calendar
                </p>
            </div>
            <div className="bg-accent h-full flex items-center px-2 group-hover:bg-dark">
                <IoIosArrowForward className="text-2xl text-light" />
            </div>
        </Link>
    );
};

export default ButtonEventCalendar;
