const nodemailer = require("nodemailer");
class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "mukhtarlyt@gmail.com",
        pass: "root",
      },
    });
  }

  async sedActivationMail(to, link) {
    await this.transporter.sendMail({
      from: "mukhtarlyt@gmail.com",
      to,
      subject: `Активация аккаунта на` + "http://localhost:5000",
      text: "",
      html: `
            <div>
            <h1>Для активации перейдите по ссылке</h1>
            <a href="${link}">${link}</a>
            </div>
        `,
    });
  }
}

module.exports = new MailService();
