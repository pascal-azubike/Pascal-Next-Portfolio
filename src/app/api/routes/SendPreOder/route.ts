import { NextRequest, NextResponse } from "next/server";
import { mailTransporter } from "../../config/sendEmailConfig";
import { sendPreOrder } from "./sendPreOrder";




export const POST = async (request: NextRequest) => {
    try {
        // Parse the request body
        const reqBody = await request.json();



        const { fullName, phoneNumber, email, quantity, deliveryDate, price, totalPrice, title, imageUrl } = reqBody
        if (!reqBody) {
            return NextResponse.json(
                { status: "error", message: "Request body is missing" },
                { status: 400 }
            );
        }
        console.log(reqBody, '............................................................')
        // Convert the date to a human-readable format
        const appointmentDate = new Date(reqBody.deliveryDate);

        // Separate options for date formatting
        const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

        // Format the date
        const formattedDate = appointmentDate.toLocaleDateString('en-US', dateOptions);



        // Combine the formatted date and time
        const formattedDateTime = `${formattedDate}`;

        console.log(reqBody, "Request Body.............................................");
        const mailToSend = sendPreOrder(fullName, phoneNumber, email, quantity, formattedDateTime, price, totalPrice, title, imageUrl);

        const mailDetails = {
            from: "pascalazubike003@gmail.com",
            to: `pascalazubike003@gmail.com`,
            subject: "Bulk Pre-Order from website",
            html: mailToSend,
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
            { status: "success", message: "Appointment sent successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Sending failed." },
            { status: 400 }
        );
    }
};
