import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();
    
    console.log('📧 Contact form submission received:', { name, email, subject });

    // Check if environment variables are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_RECEIVER) {
      console.error('❌ Missing email configuration:', {
        SMTP_USER: process.env.SMTP_USER ? 'SET' : 'MISSING',
        SMTP_PASS: process.env.SMTP_PASS ? 'SET' : 'MISSING',
        CONTACT_RECEIVER: process.env.CONTACT_RECEIVER ? 'SET' : 'MISSING'
      });
      return NextResponse.json({ 
        success: false, 
        error: 'Email service not configured. Please contact the administrator.' 
      }, { status: 500 });
    }

    console.log('✅ Environment variables found');

    // Configure your SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('🔧 SMTP transporter created, verifying connection...');

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('✅ SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('❌ SMTP verification failed:', verifyError);
      return NextResponse.json({ 
        success: false, 
        error: 'Email service authentication failed. Please check your credentials.' 
      }, { status: 500 });
    }

    console.log('📤 Attempting to send email...');

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    console.log('📧 Mail options prepared:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', result.messageId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Email send error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email.';
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email authentication failed. Please check your credentials.';
      } else if (error.message.includes('ENOTFOUND')) {
        errorMessage = 'Email service temporarily unavailable.';
      } else if (error.message.includes('Invalid recipient')) {
        errorMessage = 'Invalid recipient email address.';
      }
    }
    
    return NextResponse.json({ 
      success: false, 
      error: errorMessage 
    }, { status: 500 });
  }
}
