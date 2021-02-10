const express = require('express')
const router = express.Router();

//GET
router.get('/about', (req, res) => {
  res.status(200).send('<h1>About Us</h1>');
});

router.get('/contact', (req, res) => {
  res.status(200).send('<h1>Contact Form</h1>');
});

module.exports = router;

