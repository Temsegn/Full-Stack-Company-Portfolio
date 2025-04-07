// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, phone, message } = req.body;

  // Validation
  const required = { name, email, message };
  const missing = Object.entries(required)
    .filter(([_, v]) => !v)
    .map(([k]) => k);

  if (missing.length) {
    return res.status(400).json({
      error: `Missing required fields: ${missing.join(', ')}`
    });
  }

  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `"Dream more User Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      html: `<div style="background-color: #001f3f; padding: 20px; border-radius: 8px; color: white; font-family: Arial, sans-serif; max-width: 500px;">
  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="font-weight: bold; padding: 8px;">Name:</td>
      <td style="padding: 8px;">${name}</td>
    </tr>
    <tr>
      <td style="font-weight: bold; padding: 8px;">Email:</td>
      <td style="padding: 8px;">${email}</td>
    </tr>
    <tr>
      <td style="font-weight: bold; padding: 8px;">Phone:</td>
      <td style="padding: 8px;">${phone || 'Not provided'}</td>
    </tr>
    <tr>
      <td style="font-weight: bold; padding: 8px;">Message:</td>
      <td style="padding: 8px;">${message}</td>
    </tr>
  </table>
</div>
`,
      replyTo: email
    });

    return res.status(200).json({ success: true });
    
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({
      error: error.code === 'EAUTH' 
        ? 'Email service configuration error' 
        : 'Failed to send message'
    });
  }
}