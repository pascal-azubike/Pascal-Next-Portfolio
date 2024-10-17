import { NextRequest, NextResponse } from "next/server";
import { mailTransporter } from "../../config/sendEmailConfig";
import { sendEmail } from "./sendEmail";

export const POST = async (request: NextRequest) => {
  try {
    // Parse the request body
    const reqBody = await request.json();

    if (!reqBody) {
      return NextResponse.json(
        { status: "error", message: "Request body is missing" },
        { status: 400 }
      );
    }

    console.log(
      reqBody,
      "Request Body............................................."
    );
    const mailToSEnd = sendEmail(
      reqBody.fullName,
      reqBody.email,
      reqBody.message,
      reqBody.subject
    );

    const mailDetails = {
      from: "pascalazubike003@gmail.com",
      to: `pascalazubike003@gmail.com`,
      subject: reqBody.subject,
      html: mailToSEnd
    };

    // Use a promise for sendMail
    const sendMailPromise = new Promise((resolve, reject) => {
      mailTransporter.sendMail(mailDetails, (err: any, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });

    // Await the sendMail promise
    await sendMailPromise;

    return NextResponse.json(
      { status: "success", message: "Email sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Sending verification email link failed. Try again later." },
      { status: 400 }
    );
  }
};
