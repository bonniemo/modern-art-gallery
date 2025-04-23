"use client";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const BtnLocation = () => {
    return (
        <Link
            href="/location"
            className="flex items-center w-max h-16 group"
            aria-label="View our location"
        >
            <div className="bg-dark h-full w-52 flex justify-center items-center group-hover:bg-accent">
                <p className="uppercase text-light text-p-s leading-body-s font-bold">
                    Our location
                </p>
            </div>
            <div
                className="bg-accent h-full flex items-center px-2 group-hover:bg-dark"
                aria-hidden="true"
            >
                <IoIosArrowForward className="text-2xl text-light" />
            </div>
        </Link>
    );
};

export default BtnLocation;
