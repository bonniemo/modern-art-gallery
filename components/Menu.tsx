"use client";
import { useMenuAccessibility } from "@/hooks/useMenuAccessibility";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MenuItem, navLinks } from "./NavigationItems";

const Menu = () => {
    const [open, setOpen] = useState(false);
    const [navigatingTo, setNavigatingTo] = useState<string | null>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const menuItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const router = useRouter();
    const pathname = usePathname();

    const handleClose = () => setOpen(false);

    const { setItemRef } = useMenuAccessibility({
        isOpen: open,
        onClose: handleClose,
        menuButtonRef,
        menuItemRefs,
    });

    const handleNavigation = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();

        if (pathname === href) {
            setOpen(false);
            return;
        }

        setNavigatingTo(href);
        router.push(href);
    };

    useEffect(() => {
        if (navigatingTo && pathname === navigatingTo) {
            setOpen(false);
            setNavigatingTo(null);
        }
    }, [pathname, navigatingTo]);

    const toggleMenu = () => setOpen((menuState) => !menuState);

    return (
        <>
            <div className="p-2">
                <button
                    ref={menuButtonRef}
                    onClick={toggleMenu}
                    className="relative w-11 h-11 flex flex-col justify-center items-center bg-white/20 rounded-lg group z-[200] hover:cursor-pointer hover:bg-accent/60 transition-colors duration-300"
                    aria-label={open ? "Close Menu" : "Open Menu"}
                    aria-expanded={open}
                    aria-controls="main-menu"
                    aria-haspopup="true"
                >
                    <span
                        className={`block w-8 h-1 bg-black rounded transition-all duration-500 ease-in-out group-hover:bg-white ${
                            open ? "rotate-45 translate-y-2" : ""
                        }`}
                        aria-hidden="true"
                    />
                    <span
                        className={`block w-8 h-1 bg-black rounded transition-all duration-500 ease-in-out my-1 group-hover:bg-white ${
                            open ? "opacity-0" : ""
                        }`}
                        aria-hidden="true"
                    />
                    <span
                        className={`block w-8 h-1 bg-black rounded transition-all duration-500 ease-in-out group-hover:bg-white ${
                            open ? "-rotate-45 -translate-y-2" : ""
                        }`}
                        aria-hidden="true"
                    />
                </button>
            </div>

            <section
                id="main-menu"
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
                    px-8 py-16 flex flex-col gap-4 font-big-shoulders uppercase font-black text-header-xs md:text-header-s lg:text-header-m
                    transition-all duration-300 delay-[150ms]
                    ${open ? "opacity-100" : "opacity-0"}`}
                    role="menu"
                >
                    {navLinks.map((link, index) => (
                        <div
                            className="flex items-center w-max"
                            key={link.text}
                        >
                            <MenuItem
                                ref={(element) => setItemRef(index, element)}
                                href={link.href}
                                text={link.text}
                                delay={link.delay}
                                isActive={pathname === link.href}
                                isNavigating={navigatingTo === link.href}
                                onClick={handleNavigation}
                                isMenuOpen={open}
                                tabIndex={open ? 0 : -1}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Menu;
