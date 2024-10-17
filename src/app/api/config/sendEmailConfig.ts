
import nodemailer from "nodemailer"

export const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pascalazubike003@gmail.com",
    pass: "eyauommonhdmdebv"
  }
});


