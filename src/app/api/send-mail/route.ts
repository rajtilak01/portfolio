import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("body coming from request", body);
  console.log("pass coming frmom env", process.env.EMAIL_PASS)
  console.log("user coming frmom env", process.env.EMAIL_USER )
  // console.log("");
  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server
    port: 587, // Port for secure connection
    secure: false, // Set to true if using port 465
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "rajtilakpandey01@gmail.com", // Your email to receive contact form submissions
      subject: `New Contact from Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
