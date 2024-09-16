/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//const {onRequest} = require("firebase-functions/v2/https");
//const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();


const router = express.Router();
const app = express();

const allowedOrigins = ['https://gelatinasmaria-f245f.web.app', 'http://localhost:5173']

app.use(cors({ origin: allowedOrigins , 
    methods: ['GET', 'POST', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true}));
app.use(express.json());
app.use("/", router);


//nodemailer transport configuration
const contactEmail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

//verify connection configuration
contactEmail.verify((error) => {
    if (error) {
        console.log("Error with email configuration: ", error);
    } else {
        console.log("Ready to send emails!");
    }
});

//API route to handle form submission
router.post("/Contact", (req, res) => {
    const { fname, lname, phone, email, message } = req.body;

    const mail = {
        from: `${fname} ${lname}`,
        to: "cynthiaespinoza715@gmail.com",
        subject: "Contact Form Submission",
        html:  `<p>Name: ${fname} ${lname}</p>
                <p>Phone Number: ${phone}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if(error) {
            res.json({ status: "ERROR", message: "Failed to send message"});
        } else {
            res.json({ status: "Message Sent", message: "Your message was sent successfully"});
        }
    });
});

module.exports.api = functions.https.onRequest(app)