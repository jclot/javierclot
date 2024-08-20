import ContactNotificationEmail from "@/emails/ContactNotificationEmail";
import UserMessageEmail from "@/emails/UserMessageEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEYY);
const mainEmail = process.env.MAIN_EMAIL as string;

export async function POST(request: Request) {
  try {
    const { user_name, user_email, message } = await request.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: user_email,
      subject: "Thank you for contacting us",
      react: ContactNotificationEmail({ user_name }),
    });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: mainEmail,
      subject: "Nuevo mensaje de contacto",
      react: UserMessageEmail({ user_name, user_email, message }),
    });

    await resend.contacts.create({
      email: user_email,
      firstName: user_name,
      unsubscribed: false,
      audienceId: 'f867bc2b-5f10-42aa-bfa9-c3319c0636ff'
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to send emails:", error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
