import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, dueDate, questions } = await request.json();

    const data = await resend.emails.send({
      from: 'Contact Form <noreply@kmdoula.com>',
      to: process.env.CONTACT_EMAIL as string,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Due Date: ${dueDate}
        Questions: ${questions}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error, message: 'Failed to send email' }, { status: 500 });
  }
} 