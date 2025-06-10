"use client";
import TicketDesign from "./TicketDesign";

const TicketConformation = () => {
    return (
        <section>
            <TicketDesign />
            <p className="mt-8">
                Please bring either a printed copy or show the digital version
                on your phone when you arrive.
            </p>
            <p>
                If you have any questions or need to make changes to your
                booking, please contact us at{" "}
                <a href="mailto:events@thegallerycafe.com">
                    events@thegallerycafe.com
                </a>
                <span className="block">See you soon!</span>
                <span className="block mt-4">Warm regards,</span>
                <span className="block">The Gallery Café Team</span>
            </p>
        </section>
    );
};

export default TicketConformation;
