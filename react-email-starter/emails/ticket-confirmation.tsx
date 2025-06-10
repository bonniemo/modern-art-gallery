import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";
import { getCldImageUrl } from "next-cloudinary";

interface TicketEmailProps {
    eventTitle: string;
    eventDate: string;
    ticketId: string;
}

export const TicketConfirmationEmail = ({
    eventTitle,
    eventDate,
    ticketId,
}: TicketEmailProps) => {
    const previewText = `Your ticket for ${eventTitle}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white font-sans">
                    <Container className="mx-auto my-[40px] max-w-[600px]">
                        <Heading className="text-2xl mb-4">
                            Your Ticket for {eventTitle}
                        </Heading>
                        <Text>
                            Thank you for your purchase! Your ticket is attached
                            below.
                        </Text>

                        <Section
                            className="border border-gray-300 mt-8"
                            style={{ border: "1px solid black" }}
                        >
                            <Row className="bg-black text-white px-4 py-8">
                                <Column className="w-1/2">
                                    <Heading className="text-xl uppercase">
                                        The Gallery Café
                                    </Heading>
                                </Column>
                                <Column align="right" className="w-1/2">
                                    <Text className="uppercase">
                                        Event Ticket
                                    </Text>
                                </Column>
                            </Row>

                            <Row className="p-4 mt-8">
                                <Column className="w-2/3">
                                    <div className="space-y-1 p-4 text-base">
                                        <Text>
                                            <strong>Event name: </strong>
                                            {eventTitle}
                                        </Text>
                                        <Text>
                                            <strong>Date: </strong>
                                            {eventDate}
                                        </Text>
                                        <Text>
                                            <strong>Ticket Id: </strong>
                                            {ticketId}
                                        </Text>
                                    </div>
                                </Column>
                                <Column align="right" className="w-1/3">
                                    <Img
                                        src={getCldImageUrl({
                                            src: "qr-placeholder_azlxbg",
                                        })}
                                        width="120"
                                        height="120"
                                        alt="QR Code"
                                    />
                                </Column>
                            </Row>

                            <Text className="mt-8 px-4 pb-2 text-sm uppercase">
                                99 King Street, Newport, USA
                            </Text>
                        </Section>

                        <Text>
                            Please bring either a printed copy or show the
                            digital version on your phone when you arrive.
                        </Text>

                        <Text>
                            Your ticket must be paid within{" "}
                            <strong>3 days</strong> to remain valid. You can pay
                            by card at the Gallery Café or via Swish to{" "}
                            <strong>111 111 1111</strong>. Please include the
                            email adress you used when purchasing the ticket in
                            the message.
                        </Text>

                        <Text>
                            If you have any questions or need to make changes to
                            your booking, feel free to contact us at{" "}
                            <a href="mailto:events@thegallerycafe.com">
                                events@thegallerycafe.com
                            </a>
                            .
                        </Text>

                        <Text>See you soon!</Text>

                        <Text>
                            Warm regards, <br />
                            The Gallery Café Team
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default TicketConfirmationEmail;
