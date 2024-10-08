import ContactNotificationEmail from "@/emails/ContactNotificationEmail";
import UserMessageEmail from "@/emails/UserMessageEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const mainEmail = process.env.MAIN_EMAIL as string;
const audienceId = process.env.AUDIENCE_ID as string;
const serverDomain = process.env.SERVER_DOMAIN as string;

export async function POST(request: Request) {
  try {
    const { user_name, user_email, user_number, message } = await request.json();

    if (!user_name || !user_email || !user_number || !message) {
      throw new Error("Missing required fields");
    }

    await resend.emails.send({
      from: serverDomain,
      to: user_email,
      subject: "Thank you for contacting us",
      react: ContactNotificationEmail({ user_name }),
    });

    await resend.emails.send({
      from: serverDomain,
      to: mainEmail,
      subject: "Nuevo mensaje de contacto",
      react: UserMessageEmail({
        user_name,
        user_email,
        user_number,
        message,
      }),
    });

    await resend.contacts.create({
      email: user_email,
      firstName: user_name,
      unsubscribed: false,
      audienceId,
    });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Failed to send emails:", error);
    return new Response(
      JSON.stringify({ success: false, error: error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
