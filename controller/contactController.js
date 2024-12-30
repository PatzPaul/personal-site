const transport = require('../utils')
require("dotenv").config({
    path: './.env'
  });

const contactHandler = async (req, res) => {
    const { name, email, message } = req.body;

    // Improved validation with trimming 
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return res.status(400).json({
            status: 'fail',
            msg: 'Please Fill All The Fields!'
        })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            status: 'fail',
            msg: 'Please provide a valid email address!'
        })
    }

    try {
        // Email options
        const mailOptions = {
            from: email,
            to: process.env.ADMIN_EMAIL,
            subject: `message from ${name}`,
            html: `
            <h3>Informations<h3/>
            <ul>
            <li>Name: ${name}<li/>
            <li>Email: ${email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${message}<p/>
            `,
        };
        // Send Email 
        await transport.sendMail(mailOptions);


        return res.status(200).json({
            status: 'success',
            msg: 'Thank you for your message. I will get back to you soon!'
        });

    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({
            status:'error',
            msg: 'Failed to send message. Please try again later.'
        });
    }
};

module.exports = contactHandler