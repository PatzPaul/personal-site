const transport = require('../utils')

const contactHandler = (req, res) => {
    const { name, email, message } = req.body

    if (!name.trim() || !email.trim() || !message.trim()) {
        return res.json({
            status: 'fail',
            msg: 'Please Fill All The Fields!'
        })
    }

    let mailOptions = {
        from: email,
        to: "pathefister@gmail.com",
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

    transport.sendMail(mailOptions, (error) => {
        try {
            if (error)
                return res.status(400).json({ msg: "Please Fill All The Fields!" });
            res.status(200).json({ msg: "Thank You For Contacting Patrick." });
        } catch (error) {
            if (error) return res.status(500).json({ msg: "There is server error" });
        }
    });

    res.status(201).json({
        status: 'success'
    })
}

module.exports = contactHandler