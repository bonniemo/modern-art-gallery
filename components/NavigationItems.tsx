import Link from "next/link";
import { forwardRef, MouseEvent } from "react";
import LoadingSpinner from "./LoadingSpinner";

export const navLinks = [
    { href: "/", text: "Home", delay: "delay-[400ms]" },
    { href: "/location", text: "Location", delay: "delay-[500ms]" },
    { href: "/event-calendar", text: "Event Calendar", delay: "delay-[600ms]" },
    {
        href: "/the-gallery-cafe",
        text: "The Gallery Café",
        delay: "delay-[700ms]",
    },
];

type MenuItemProps = {
    href: string;
    text: string;
    delay: string;
    isActive: boolean;
    isNavigating: boolean;
    onClick: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
    isMenuOpen: boolean;
    tabIndex?: number;
};

export const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
    function MenuItem(
        {
            href,
            text,
            delay,
            isActive,
            isNavigating,
            onClick,
            isMenuOpen,
            tabIndex = 0,
        },
        ref
    ) {
        return (
            <div
                className={`
                    transition-all duration-[800ms] ease-out
                    ${delay}
                    ${
                        isMenuOpen
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-8"
                    }
                `}
            >
                <Link
                    ref={ref}
                    href={href}
                    className={`
                        transition-all duration-200
                        hover:text-light hover:translate-x-2
                        focus:outline-none
                        focus-visible:text-light focus-visible:translate-x-2 flex items-center
                        ${isActive ? "text-light" : ""}
                        ${isNavigating ? "cursor-wait opacity-50" : ""}
                    `}
                    onClick={(e) => onClick(e, href)}
                    role="menuitem"
                    tabIndex={tabIndex}
                    aria-current={isActive ? "page" : undefined}
                >
                    {text}
                    {isNavigating && <LoadingSpinner color="light" />}
                </Link>
            </div>
        );
    }
);
