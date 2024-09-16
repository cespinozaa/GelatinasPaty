/** 

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import functions from 'firebase-functions';


const router = express.Router();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));

//nodemailer transport configuration
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().smtp.username,
        pass: functions.config().smtp.password,
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
        from: "${fname} ${lname}",
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
*/