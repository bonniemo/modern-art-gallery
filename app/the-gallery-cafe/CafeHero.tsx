import React from "react";
import Image from "next/image";
import girlWithMug from "@/public/assets/cafe/girl-with-mug.jpg";

const CafeHero = () => {
    return (
        <div className="relative w-full h-[70vh]">
            <Image
                src={girlWithMug}
                alt="Girl holding a coffee mug"
                fill
                priority
                className="object-cover"
            />
        </div>
    );
};

export default CafeHero;
