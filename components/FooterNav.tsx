"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

type FooterNavProps = {
    bgColor: string;
};

const FooterNav = ({ bgColor }: FooterNavProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const [loadingHref, setLoadingHref] = useState<string | null>(null);

    const navLinks = [
        { href: "/", text: "Home" },
        { href: "/the-gallery-cafe", text: "The Gallery Café" },
        { href: "/location", text: "Location" },
    ];

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        if (href === pathname) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        e.preventDefault();
        setLoadingHref(href);
        setTimeout(() => {
            router.push(href);
        }, 300);
    };

    const hoverSpinColor = bgColor === "black" ? "accent" : "light";

    return (
        <section className="flex flex-col gap-4 sm:flex-row md:gap-6 text-p-s leading-body-s lg:text-p-m lg:leading-body-m font-semibold mt-12 md:col-start-2 md:row-start-2 min-w-[19.5rem] md:justify-self-center">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`hover:text-${hoverSpinColor} flex items-center gap-2`}
                    aria-label={`Navigate to ${link.text}`}
                >
                    <span className="relative flex items-center">
                        {link.text}
                        <span className="ml-2 w-4 h-4 flex justify-center items-center">
                            {loadingHref === link.href && (
                                <LoadingSpinner color={hoverSpinColor} />
                            )}
                        </span>
                    </span>
                </Link>
            ))}
        </section>
    );
};

export default FooterNav;
