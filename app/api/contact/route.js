import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    console.log('Starting email process...');
    const { firstname, lastname, email, phone, subject, message } = await req.json();
    console.log('Received form data:', { firstname, lastname, email, phone, subject });

    // Log environment variables (without exposing the actual password)
    console.log('Email user configured:', !!process.env.EMAIL_USER);
    console.log('Email pass configured:', !!process.env.EMAIL_PASS);

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('Transporter created');

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'anirbandey9497@gmail.com', // Your email address
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    console.log('Attempting to send email...');
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
} 
