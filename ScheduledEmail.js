let nodemailer = require('nodemailer');
let cron = require('node-cron');

//const mailer = async () => { 

let transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: "*************", //put in your own email
    pass: "***********",  //put in your own password
  },
});

let mailOptions = {
  from: "***************", //enter email of the sender
  to:  "***************",  // enter email of the reciever
  subject: "Scheduled email",
  html: "<p> Now Sending scheduled email with nodemailer. Its 12:15pm!!!</p>"
};

cron.schedule( '0 15 12 * * *', () => { //schedule the exact time you want the email to be sent
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error); //raise an error
    } else {
      console.log('Email sent Successfuly!'); //Tell us if it went successful!
    }
  });
})
//}

//mailer()




