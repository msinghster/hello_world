var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'msinghster@gmail.com',
    pass: 'Tigers007@'
  }
});

var mailOptions = {
  from: 'msinghster@gmail.com',
  to: 'mani@creativeindia.net.in',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});