"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Menu = () => {
    const [open, setOpen] = useState(false);
    const [navigatingTo, setNavigatingTo] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const navLinks = [
        { href: "/", text: "Home", delay: "delay-[400ms]" },
        { href: "/location", text: "Location", delay: "delay-[500ms]" },
        {
            href: "/event-calendar",
            text: "Event Calendar",
            delay: "delay-[600ms]",
        },
        {
            href: "/the-gallery-cafe",
            text: "The Gallery Café",
            delay: "delay-[700ms]",
        },
    ];

    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        if (open) {
            window.addEventListener("keydown", handleEsc);
        }
        return () => window.removeEventListener("keydown", handleEsc);
    }, [open]);

    // Manage focus and scroll lock
    useEffect(() => {
        if (open) {
            const lastFocused = document.activeElement;
            const firstLink = menuRef.current?.querySelector("a");
            firstLink?.focus();
            // Prevent background scroll
            document.body.style.overflow = "hidden";

            return () => {
                // Restore focus and scroll when menu closes
                if (lastFocused instanceof HTMLElement) {
                    lastFocused.focus();
                }
                document.body.style.overflow = "unset";
            };
        }
    }, [open]);

    const handleNavigation = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        setNavigatingTo(href);

        const handleRouteComplete = () => {
            setOpen(false);
            setNavigatingTo(null);
            window.removeEventListener("load", handleRouteComplete);
        };

        window.addEventListener("load", handleRouteComplete);
        router.push(href);
    };

    return (
        <>
            <div className="p-2">
                <button
                    onClick={() => setOpen(!open)}
                    className="relative w-11 h-11 flex flex-col justify-center items-center group z-[200]"
                    aria-label="Toggle Menu"
                    aria-expanded={open}
                    aria-controls="main-menu"
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
            </div>
            <section
                id="main-menu"
                ref={menuRef}
                role="dialog"
                aria-modal="true"
                aria-label="Main menu"
                className={`fixed top-0 left-0 w-screen h-screen bg-accent z-[100]
                transition-all duration-300 ease-in-out overflow-hidden
                ${
                    open
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0"
                }`}
            >
                <div
                    className={`h-full w-full overflow-y-auto
                    px-8 py-16 flex flex-col gap-8 font-big-shoulders uppercase font-black text-header-s md:text-header-m
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
                                className={`
                                    transition-all duration-200 
                                    hover:text-light hover:translate-x-2 
                                    inline-block focus:outline-none 
                                    focus-visible:text-light focus-visible:translate-x-2
                                    ${
                                        navigatingTo === link.href
                                            ? "cursor-wait opacity-50"
                                            : ""
                                    }
                                `}
                                onClick={(e) => handleNavigation(e, link.href)}
                            >
                                {link.text}
                                {navigatingTo === link.href && (
                                    <span className="ml-2 inline-block animate-spin">
                                        ⟳
                                    </span>
                                )}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Menu;
