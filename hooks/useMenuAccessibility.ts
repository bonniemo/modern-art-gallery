import { RefObject, useEffect, useRef } from "react";

interface MenuAccessibilityOptions {
    isOpen: boolean;
    onClose: () => void;
    menuButtonRef: RefObject<HTMLButtonElement | null>;
    menuItemRefs: RefObject<(HTMLAnchorElement | null)[]>;
}

export function useMenuAccessibility({
    isOpen,
    onClose,
    menuButtonRef,
    menuItemRefs,
}: MenuAccessibilityOptions) {
    const previousFocusRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            previousFocusRef.current = document.activeElement as HTMLElement;

            return () => {
                document.body.style.overflow = "";
            };
        }
    }, [isOpen]);

    // Handle focus management and keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        // Focus the first menu item when menu opens
        setTimeout(() => {
            const firstItem = menuItemRefs.current?.[0];
            if (firstItem) firstItem.focus();
        }, 50);

        const handleKeyDown = (e: KeyboardEvent) => {
            const focusableItems = menuItemRefs.current?.filter(
                Boolean
            ) as HTMLAnchorElement[];
            if (!focusableItems?.length) return;

            if (e.key === "Escape") {
                onClose();
                return;
            }

            // Handle Tab key (with wrap-around behavior)
            if (e.key === "Tab") {
                const currentIndex = focusableItems.indexOf(
                    document.activeElement as HTMLAnchorElement
                );
                if (currentIndex === -1) return;

                if (e.shiftKey && currentIndex === 0) {
                    e.preventDefault();
                    focusableItems[focusableItems.length - 1].focus();
                } else if (
                    !e.shiftKey &&
                    currentIndex === focusableItems.length - 1
                ) {
                    e.preventDefault();
                    focusableItems[0].focus();
                }
            }

            // Arrow key navigation
            if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                e.preventDefault();
                const currentIndex = focusableItems.indexOf(
                    document.activeElement as HTMLAnchorElement
                );
                const nextIndex = (currentIndex + 1) % focusableItems.length;
                focusableItems[nextIndex].focus();
            }

            if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                e.preventDefault();
                const currentIndex = focusableItems.indexOf(
                    document.activeElement as HTMLAnchorElement
                );
                const prevIndex =
                    (currentIndex - 1 + focusableItems.length) %
                    focusableItems.length;
                focusableItems[prevIndex].focus();
            }

            // Jump to first/last items
            if (e.key === "Home") {
                e.preventDefault();
                focusableItems[0].focus();
            }

            if (e.key === "End") {
                e.preventDefault();
                focusableItems[focusableItems.length - 1].focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose, menuItemRefs]);

    // Restore focus when menu closes
    useEffect(() => {
        if (!isOpen && previousFocusRef.current) {
            setTimeout(() => {
                if (menuButtonRef?.current) {
                    menuButtonRef.current.focus();
                } else if (previousFocusRef.current) {
                    previousFocusRef.current.focus();
                }
            }, 0);
        }
    }, [isOpen, menuButtonRef]);

    // Return helper function to set refs in parent component
    return {
        setItemRef: (index: number, element: HTMLAnchorElement | null) => {
            if (menuItemRefs.current) {
                menuItemRefs.current[index] = element;
            }
        },
    };
}
