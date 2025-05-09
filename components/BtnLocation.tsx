"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import LoadingSpinner from "./LoadingSpinner";

const BtnLocation = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            router.push("/location");
        }, 300);
    };

    return (
        <button
            onClick={handleClick}
            className="flex items-center w-max h-16 group"
            aria-label="View our location"
        >
            <div className="bg-dark h-full w-52 flex justify-center items-center group-hover:bg-accent">
                <p className="uppercase text-light text-p-s leading-body-s font-bold">
                    Our location
                </p>
            </div>
            <div className="bg-accent h-full flex items-center px-2 group-hover:bg-dark">
                {loading ? (
                    <LoadingSpinner color="light" />
                ) : (
                    <IoIosArrowForward
                        className="text-2xl text-light"
                        aria-hidden="true"
                    />
                )}
            </div>
        </button>
    );
};

export default BtnLocation;
