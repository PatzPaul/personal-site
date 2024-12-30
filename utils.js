require("dotenv").config({
    path: './.env'
  });
const nodemailer = require('nodemailer');

// const transport = nodemailer.createTransport({
//   service: "Gmail",
//   port: 465,
//   auth: {
//     user: "pathefister@gmail.com",
//     pass: "patinator",
//   },
// });

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});
    transport.verify((error,success) => {
        if (error) {
            console.error('Mail transport error:', error)
        } else {
            console.log('Server is ready to send emails')
        }
    })

module.exports = transport