const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using your Gmail account
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'gaurishk66@gmail.com',
      pass: 'zhsgrpgborbhzqch',
    },
  });

  const mailOptions = {
    from: 'gaurishk66@gmail.com',
    to: 'gaurishk66@gmail.com',
    subject: 'New contact form query',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('An error occurred while sending the email');
    } else {
      console.log('Email sent successfully');
      res.send('Email sent successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
