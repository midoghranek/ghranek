const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

exports.submit = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      if (req.method !== "POST") {
        return;
      }

      const mailOptions = {
        from: `Ghranek <${gmailEmail}>`,
        replyTo: req.body.email,
        sender: req.body.email,
        to: gmailEmail,
        subject: `[GHRANEK.COM] Message sent from ${req.body.name} - ${req.body.email}`,
        text: req.body.message,
        html: `<p>${req.body.message}`
      };

      mailTransport.sendMail(mailOptions);
      res.status(200).send({ isEmailSend: true });
    });
  });
