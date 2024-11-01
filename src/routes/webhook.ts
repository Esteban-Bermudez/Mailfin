import express, { Request, Response } from "express";
import { fetchTmdbData } from "../services/tmdbService";
import { sendSendgridEmail } from "../services/sendGridService";
import { sendSMTPEmail } from "../services/smtpService";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Webhook is active" });
});

router.post("/", async (req: Request, res: Response) => {
  console.log("Headers: ", req.headers);
  console.log("Body: ", req.body);

  if (!req.body.Provider_tmdb) {
    return res.status(400).json({ message: "TMDB ID not found in body" });
  }

  try {
    const tmdbResponse = await fetchTmdbData(req.body.Provider_tmdb);
    const formattedResponse = formatTmdbResponse(tmdbResponse);

    if (process.env.MAIL_PROVIDER?.toLowerCase() === "smtp") {
      await sendSMTPEmail(formattedResponse);
    } else {
      await sendSendgridEmail(formattedResponse);
    }

    res.status(200).json(formattedResponse);
  } catch (error: any) {
    console.error(error);
    res.status(error.status || 500).json({ message: error.message || "Server error" });
  }
});

export default router;

