const express = require("express")
const router = express.Router()

const contactHandler = require('../controller/contactController')

router.route('/contact')
  .post(contactHandler)

module.exports = router