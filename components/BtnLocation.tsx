"use client";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const BtnLocation = () => {
    return (
        <Link href="/location" className="flex items-center w-max h-16">
            <div className="bg-dark h-full w-52 flex justify-center items-center">
                <p className="uppercase text-light">Our location</p>
            </div>
            <div className="bg-accent h-full flex items-center px-2">
                <IoIosArrowForward className="text-2xl text-light" />
            </div>
        </Link>
    );
};

export default BtnLocation;
