import nodemailer from "nodemailer"
import "dotenv/config"

const emails = [ "amorimclark@gmail.com", "julho1104@gmail.com" ]
const user = process.env.USER_EMAIL
const pass = process.env.PASSWORD

export class EmailController {
  async handle(request, response){
    
    var transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: pass,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    const message = await transport.sendMail({
      from: "sender@service.com",
      to: emails,
      subject: "Messagem",
      html: "<h2>O primeiro email enviado!</h2>",
      text: "Texto de exemplo",
      date: new Date()
    })

    transport.sendMail(message, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return response.status(200).json(message)
  }
}