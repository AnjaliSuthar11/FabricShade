import { NextResponse } from "next/server";

import nodemailer from "nodemailer"
export default async function POST(req,res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or use 'Zoho', 'Outlook', etc.
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose email
    const mailOptions = {
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: "youremail@example.com", // replace with your actual email
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8f9fa;">
          <h2 style="color: #333;">New Message from Fabricshade India</h2>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #fff; padding: 10px; border-radius: 6px; border: 1px solid #ddd;">
            ${message.replace(/\n/g, "<br />")}
          </p>
          <hr />
          <p style="font-size: 12px; color: #888;">This message was sent from the contact form on Fabricshade India's website.</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}
