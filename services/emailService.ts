import { render } from "@react-email/render";
import { Resend } from "resend";
import { TicketConfirmationEmail } from "../react-email-starter/emails/ticket-confirmation";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);
// Types for email parameters
export interface TicketEmailParams {
    userEmail: string;
    eventTitle: string;
    eventDate: string;
    ticketId: string;
}
/**
 * Sends ticket confirmation email
 */
export async function sendTicketEmail(params: TicketEmailParams) {
    try {
        const { userEmail, eventTitle, eventDate, ticketId } = params;

        // Render the React email template to HTML
        const html = await render(
            TicketConfirmationEmail({
                eventTitle,
                eventDate,
                ticketId,
            })
        );

        // Send the email
        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: userEmail,
            subject: `Your ticket for ${eventTitle}`,
            html: html,
        });

        if (error) {
            console.error("Failed to send ticket email:", error);
            return { success: false, error };
        }

        console.log("Ticket email sent successfully");
        return { success: true, data };
    } catch (error) {
        console.error("Error in sendTicketEmail:", error);
        return { success: false, error };
    }
}
