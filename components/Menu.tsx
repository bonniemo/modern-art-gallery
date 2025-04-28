"use client";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { href: "/", text: "Home", delay: "delay-[400ms]" },
        { href: "/", text: "Location", delay: "delay-[500ms]" },
        { href: "/", text: "Event Calendar", delay: "delay-[600ms]" },
        { href: "/", text: "The Gallery Café", delay: "delay-[700ms]" },
    ];

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="relative w-8 h-8 flex flex-col justify-center items-center group z-50"
                aria-label="Toggle Menu"
            >
                <span
                    className={`block w-8 h-1 bg-black rounded transition-all duration-500 ease-in-out ${
                        open ? "rotate-45 translate-y-2" : ""
                    }`}
                />
                <span
                    className={`block w-8 h-1 bg-black rounded transition-all duration-500 ease-in-out my-1 ${
                        open ? "opacity-0" : ""
                    }`}
                />
                <span
                    className={`block w-8 h-1 bg-black rounded transition-all duration-500 ease-in-out ${
                        open ? "-rotate-45 -translate-y-2" : ""
                    }`}
                />
            </button>

            <section
                className={`fixed top-0 left-0 w-screen h-screen bg-accent z-40
                transition-all duration-300 ease-in-out
                ${
                    open
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0"
                }`}
            >
                <div
                    className={`px-8 py-16 flex flex-col gap-8 font-big-shoulders uppercase font-black text-header-s
                    transition-all duration-300 delay-[150ms]
                    ${open ? "opacity-100" : "opacity-0"}`}
                >
                    {navLinks.map((link) => (
                        <div
                            key={link.text}
                            className={`
                                transition-all duration-[800ms] ease-out
                                ${link.delay}
                                ${
                                    open
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 -translate-x-8"
                                }
                            `}
                        >
                            <Link
                                href={link.href}
                                className="transition-all duration-200 hover:text-light hover:translate-x-2 inline-block"
                            >
                                {link.text}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Menu;
