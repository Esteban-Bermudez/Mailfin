import sgMail from "@sendgrid/mail";
// import { generateHtmlTemplate } from "../templates/emailTemplate";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function sendSendgridEmail(data: any) {
  const msg = {
    from: { email: process.env.SENDGRID_SENDER_EMAIL },
    to: process.env.SENDGRID_RECEIVER_EMAIL,
    templateId: process.env.SENDGRID_TEMPLATE_ID,
    dynamic_template_data: {
      title: data.title,
      releaseDate: data.releaseDate,
      overview: data.overview,
      posterPath: data.posterPath,
      movieUrl: data.movieUrl,
      imdbUrl: data.imdbUrl,
    },
  };
  await sgMail.send(msg);
}

