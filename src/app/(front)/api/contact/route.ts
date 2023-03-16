import {NextRequest, NextResponse} from "next/server";

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function POST(request: NextRequest) {
    const fields: ContactForm = await request.json()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
        }
    })
    const mailData = {
        from: 'noreply@leaderos.net',
        replyTo: fields.email,
        to: "benfiratkaya@gmail.com",
        subject: fields.subject,
        text: fields.message + " | Sent from: " + fields.email,
        html: `<div>${fields.message}</div><p>Sent from: ${fields.email}</p>`
    }

    transporter.sendMail(mailData, function (error: any, info: any) {
        if (error) {
            console.log(error)
            return NextResponse.json({status: false, message: "Something went wrong. Please try again later."});
        }
        console.log(info)
    })
    return NextResponse.json({status: true})
}