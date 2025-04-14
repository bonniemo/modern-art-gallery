"use client";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const BtnGoHome = () => {
    return (
        <Link href="/" className="flex items-center w-max h-16">
            <div className="bg-accent h-full flex items-center px-2">
                <IoIosArrowBack className="text-2xl text-light" />
            </div>
            <div className="bg-dark h-full w-52 flex justify-center items-center">
                <p className="uppercase text-light">Back to home</p>
            </div>
        </Link>
    );
};

export default BtnGoHome;
