const nodemailer = require("nodemailer");

const user = "seuemail@gmail.com";
const pass = "sua senha";

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: user,
        pass: pass,
    }
});

transporter.sendMail({
    from: user,
    to: "email do user que receberá o email.",
    subject: "título da Mensagem",
    text: "Texto da Mensagem",
    html: `<h1>Aqui pode ser inserido texto em html</h1>`
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})

// OBSERVAÇÃO ENTRE NO LINK E PERMITA O ACESSO A APP MENOS SEGUROS

// https://myaccount.google.com/lesssecureapps

