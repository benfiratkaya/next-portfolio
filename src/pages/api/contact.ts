import type { NextApiRequest, NextApiResponse } from 'next'

interface ContactFormRequest extends NextApiRequest {
  body: {
    name: string
    email: string
    subject: string
    message: string
  }
}

type ResponseData = {
  status: boolean
  message?: string
}

export default function handler(
    req: ContactFormRequest,
    res: NextApiResponse<ResponseData>
) {
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
  const fields = req.body;
  const mailData = {
    from: process.env.SMTP_USERNAME,
    replyTo: fields.email,
    to: process.env.CONTACT_EMAIL,
    subject: fields.subject,
    text: `${fields.message} | Sent from: ${fields.name}, ${fields.email}`,
    html: `<div>${fields.message}</div><p>Sent from: ${fields.name}, ${fields.email}</p>`
  }
  
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) {
      console.log(err)
      res.status(500).json({
        status: false,
        message: "Something went wrong. Please try again later."
      })
    }
    else {
      console.log(info)
      res.status(200).json({
        status: true
      })
    }
  })
}