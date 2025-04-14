import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";

type FooterProp = {
    bgColor: string;
};

const Footer = ({ bgColor }: FooterProp) => {
    return (
        <section
            className={`px-6 py-12 md:px-10 md:py-14 md:flex md:justify-between ${
                bgColor === "black"
                    ? "bg-dark text-light"
                    : "bg-accent text-dark"
            }`}
        >
            <h3 className="uppercase md:m-0">
                <span className="block">Modern</span> Art Gallery
            </h3>
            <p className=" lg:w-1/4 md:w-2/4 mt-10 md:mt-0">
                The Modern Art Gallery is free to all visitors and open seven
                days a week from 8am to 9pm. Find us at 99 King Street, Newport,
                USA.
            </p>
            <section className="mt-10 flex gap-4 text-xl md:m-0">
                <IoLogoFacebook
                    className={
                        bgColor === "black"
                            ? "hover:text-accent"
                            : "hover:text-light"
                    }
                />
                <FaInstagram
                    className={
                        bgColor === "black"
                            ? "hover:text-accent"
                            : "hover:text-light"
                    }
                />
                <FaTwitter
                    className={
                        bgColor === "black"
                            ? "hover:text-accent"
                            : "hover:text-light"
                    }
                />
            </section>
        </section>
    );
};

export default Footer;
