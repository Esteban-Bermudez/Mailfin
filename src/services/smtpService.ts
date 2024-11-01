import nodemailer from "nodemailer";
import { generateHtmlTemplate } from "../templates/emailTemplate";

export async function sendSMTPEmail(data: any) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || "587",
    secure: false,
    auth: {
      user: process.env.SMTP_AUTH_USER,
      pass: process.env.SMTP_AUTH_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_SENDER_EMAIL,
    to: process.env.SMTP_RECEIVER_EMAIL,
    subject: `New Movie Added: ${data.title} (${data.releaseDate})`,
    html: generateHtmlTemplate(data),
  };

  await transporter.sendMail(mailOptions);
}

