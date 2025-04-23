import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";

type FooterProp = {
    bgColor: string;
};

const Footer = ({ bgColor }: FooterProp) => {
    const socialIcons = [
        { Icon: IoLogoFacebook, id: "facebook" },
        { Icon: FaInstagram, id: "instagram" },
        { Icon: FaTwitter, id: "twitter" },
    ];

    const navLinks = [
        { href: "/", text: "Home" },
        { href: "/the-gallery-cafe", text: "The Gallery Café" },
        { href: "/location", text: "Location" },
    ];

    return (
        <footer
            className={`px-6 pt-12 pb-6 md:px-10 md:py-14 md:grid md:grid-cols-[1fr, 2fr, 1fr] md:grid-rows-2 ${
                bgColor === "black"
                    ? "bg-dark text-light"
                    : "bg-accent text-dark"
            }`}
            role="contentinfo"
            aria-label="Site footer"
        >
            <h3 className="uppercase md:m-0 md:col-start-1 md:row-start-1 text-header-s leading-s">
                <span className="block">Modern</span> Art Gallery
            </h3>
            <p className=" mt-8 md:mt-0 md:col-start-2 md:justify-self-center text-p-s leading-body-s font-light">
                Open seven days a week from 8am to 9pm.
                <span className="block">
                    Find us at 99 King Street, Newport, USA.
                </span>
            </p>

            <section className="flex flex-col gap-4 sm:flex-row md:gap-6 text-p-s leading-body-s lg:text-p-m lg:leading-body-m font-semibold mt-12 md:col-start-2 md:row-start-2 min-w-[19.5rem] md:justify-self-center">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        className={
                            bgColor === "black"
                                ? "hover:text-accent"
                                : "hover:text-light"
                        }
                        href={link.href}
                    >
                        {link.text}
                    </Link>
                ))}
            </section>

            <section className="mt-12 flex gap-4 text-xl md:m-0 md:col-start-3 md:row-start-1 md:justify-self-end">
                {socialIcons.map(({ Icon, id }) => (
                    <Icon
                        key={id}
                        className={
                            bgColor === "black"
                                ? "hover:text-accent"
                                : "hover:text-light"
                        }
                    />
                ))}
            </section>
        </footer>
    );
};

export default Footer;
