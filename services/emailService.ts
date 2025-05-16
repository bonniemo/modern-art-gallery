import { Resend } from "resend";

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
 * Generates HTML for ticket email template
 */
function generateTicketEmailHtml({
    eventTitle,
    eventDate,
    ticketId,
}: Omit<TicketEmailParams, "userEmail">) {
    return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h1>Your Ticket for ${eventTitle}</h1>
      <p>Thank you for your purchase. Here is your ticket:</p>
      
      <div style="border: 1px solid #e2e2e2; margin-top: 32px;">
        <div style="background-color: #333; color: white; padding: 32px 16px; display: flex; justify-content: space-between; align-items: center;">
          <h2 style="text-transform: uppercase; margin: 0;">The Gallery Café</h2>
          <h4 style="text-transform: uppercase; margin: 0;">Event Ticket</h4>
        </div>
        
        <div style="display: flex; justify-content: space-between; padding: 8px; margin-top: 32px;">
          <ul style="list-style: none; padding: 0; text-transform: uppercase;">
            <li style="margin-bottom: 8px;">
              <span style="font-weight: bold;">Event name: </span>
              ${eventTitle}
            </li>
            <li style="margin-bottom: 8px;">
              <span style="font-weight: bold;">Date: </span>
              ${eventDate}
            </li>
            <li style="margin-bottom: 8px;">
              <span style="font-weight: bold;">Ticket Id: </span>
              ${ticketId}
            </li>
          </ul>
          
          <img src="https://placehold.co/120x120/png?text=QR" alt="QR Code" width="120" height="120" />
        </div>
        
        <address style="margin-top: 32px; padding: 8px; font-size: 14px; text-transform: uppercase; padding-bottom: 8px;">
          99 King Street, Newport, USA
        </address>
      </div>
      
      <p style="margin-top: 24px;">Please present this ticket at the entrance.</p>
      <p>Enjoy the event!</p>
    </div>
  `;
}

/**
 * Sends ticket confirmation email
 */
export async function sendTicketEmail(params: TicketEmailParams) {
    try {
        const { userEmail, eventTitle, eventDate, ticketId } = params;

        // Generate the ticket HTML
        const ticketHtml = generateTicketEmailHtml({
            eventTitle,
            eventDate,
            ticketId,
        });

        // Send the email
        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: userEmail,
            subject: `Your ticket for ${eventTitle}`,
            html: ticketHtml,
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
