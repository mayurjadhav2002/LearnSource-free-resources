
const nodemailer = require('nodemailer');
 
 
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',

    auth: {
        user: "formangoanimate@gmail.com",
        pass: 'tvynzbwlvtyadwns'
    }
});
 
let mailDetails = {
    from: 'formangoanimate@gmail.com',
    to: 'mayurshrikantjadhav@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail for GeeksforGeeks'
};
 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
        console.log(err.message)
    } else {
        console.log('Email sent successfully');
    }
});