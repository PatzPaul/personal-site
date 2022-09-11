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
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "d9670986164039",
        pass: "2481663e7c145d"
    }
});

module.exports = transport