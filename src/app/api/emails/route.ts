import Welcome from "@/emails/Welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "julianclot123@gmail.com",
      subject: "hello world",
      react: Welcome(),
    });
    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
