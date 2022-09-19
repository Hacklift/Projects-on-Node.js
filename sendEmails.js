//Import Nodemailer, JS module for sending emails

let nodemailer = require('nodemailer'); 
//async functions tells us if the email was successful or not
const mailer = async () => { 
//Transporter object is responsible for sending the email messages
let transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: "****************", //put in your own email
    pass: "************",  //put in your own password
  },
});

//This contains the email details. Sender and receiver
let mailOptions = {
  from: "sender's email goes here",
  to:  "receiver's email goes here",
  subject: "Sending an email with nodemailer!",
  html: "<p> This email is successful!</p>"
};

await transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error); //raise an error
  } else {
    console.log('Email sent Successfuly!'); //Tell us if it went successful!
  }
});
}

mailer()