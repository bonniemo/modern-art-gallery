import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";

type FooterProp = {
    page: string;
};

const Footer = ({ page }: FooterProp) => {
    return (
        <section
            className={`px-6 py-8 md:px-10 md:py-14 md:flex md:justify-between ${
                page === "landingPage"
                    ? "bg-dark text-light"
                    : "bg-accent text-dark"
            }`}
        >
            <h3 className="uppercase mb-8 md:m-0">
                <span className="block">Modern</span> Art Gallery
            </h3>
            <p className=" lg:w-1/4 md:w-2/4">
                The Modern Art Gallery is free to all visitors and open seven
                days a week from 8am to 9pm. Find us at 99 King Street, Newport,
                USA.
            </p>
            <section className="mt-8 flex gap-4 text-xl md:m-0">
                <IoLogoFacebook />
                <FaInstagram />
                <FaTwitter />
            </section>
        </section>
    );
};

export default Footer;
