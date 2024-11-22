import nodemailer from 'nodemailer';
import { NextResponse, NextRequest } from 'next/server';

export default async function handler(req : NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, {status: 405});
  }

  const body = await req.json();
  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use a reliable email service (e.g., Gmail, Outlook)
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL, // Your email to receive contact form submissions
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    NextResponse.json({ message: 'Email sent successfully!' }, {status: 200});
  } catch (error) {
    console.error(error);
    NextResponse.json({ error: 'Failed to send email.' }, {status: 500});
  }
}
