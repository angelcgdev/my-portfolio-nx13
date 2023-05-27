import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import * as dotenv from "dotenv";
import { NextRequest, NextResponse } from "next/server";
import { Response } from "../models";

export const contactPath = '/api/contact';

export async function POST(req: NextRequest) {
  const res = await req.json();
  console.log({ res: res.message });
  dotenv.config();
  const service = process.env.SMTP_SERVICE;
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT ?? "");
  const user = process.env.email;
  const pass = process.env.password;
  const to = process.env.to;
  const transporter = nodemailer.createTransport({
    service,
    host,
    port,
    auth: {
      user,
      pass,
    },
    secure: true,
  });

  const mailData: Mail.Options = {
    from: user,
    to,
    subject: `${res.subjet} - MY WEBSITE`,
    text: res.message,
    replyTo: res.email,
    html: `
      <section style="background-color: #E7EAEF; padding: 10px;">
        <div style="background-color: #FFFFFF; color: #000000; border-radius: 10px; padding: 10px;">
          <p>${res.message}</p>
          <hr/>
          <p style="font-weight: bold; margin: 0; margin-bottom: 10px;">Atte: ${res.name}</p>
          <p>reply to ${res.email}</p>
        </div>
      </section>`,
  };

  function sendAsPromise() {
    return new Promise<Response>(async (resolve , _) => {
      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          const { message } = err;
          resolve({ message });
        } else {
          resolve({ message: info.response });
        }
      });
    });
  }
  const response = await sendAsPromise();
  return NextResponse.json(response);
}
