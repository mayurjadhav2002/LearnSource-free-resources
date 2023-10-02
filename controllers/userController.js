const express = require('express');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const config = require('../config/config')
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');




const resetpasswordmail = async(name, email, token)=>{
    console.log(email)
try {
     const emailData = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        requireTLS: true,
        auth:{
            user:process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const Mailoptions = {
        from: config.email_user,
        to: email,
        subject: "Token for Password Reset Request | QbyteSpace",
        html:`<p>Copy this token :' + token + 'and enter in otp section <a href="http://localhost:3000/api/reset-password?email=${email}&token=${token}">Reset password</a></p>`,
    }
    emailData.sendMail(Mailoptions, function(error, success){
        if(error){
            console.log(error);
        }else{
            console.log("mail has been sent: ", success.response);
        }
    })
    
} catch (error) {
    console.log({success:false, msg:error.message})

    
}
}
const token_generate = async(id) =>{
    try {
        const token =  await jwt.sign({_id:id}, process.env.TOKEN_KEY);
        return token;
        
    } catch (error) {
        res.status(400).send({msg: "error in token generation"})
    }
}

const securePassword = async (password) => {
    try {
        const new_password = await bcrypt.hash(password, 10);
        return new_password;

    } catch (error) {
        res.status(400).send(error.message)
    }
}

const randomImage = async() =>{
    const imageNames = ['avatar1.jpeg', 'avatar2.png', 'avatar3.jpg']
    const random = Math.floor(Math.random() * 2);
    return imageNames[random]

}
const register_user = async (req, res) => {
    try {
        const userData = await User.findOne({ email: req.body.email });
        if (userData) {
            res.send({ msg: "User With this email already exists" });
        } else {
            const pass = await securePassword(req.body.password);
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: pass,
                image: await randomImage()
            });

            const data = await user.save();
            if (data) { res.status(200).send({ msg: "Registration Successful" }) }
            else {
                res.status(400).send({ msg: "error uploading the data" });
            }
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
}


const user_login = async (req, res) => {
    const userData = await User.findOne({ email: req.body.email });
    if (userData) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const password_Verify = await bcrypt.compare(password, userData.password);
            if (password_Verify) {
                const token = await token_generate(userData._id);

                const userAccount = {
                    _id: userData._id,
                    name: userData.name,
                    email: userData.email,
                    image: userData.image,
                    short_bio: userData.short_bio,
                    age: userData.age,
                    role: userData.role,
                    token: token
                
                };
                const response = {
                    success: true,
                    msg: "User Details",
                    data: userAccount
                }
                res.status(200).send(response);


            } else {
                res.status(400).send({ msg: `Incorrect Login Credentials` });
            }

        } catch (error) {
            res.status(400).send({error: error.message, msg:"Faild to load, some errored occured"});
        }
    } else {
        res.status(400).send({ msg: "User Not exists" })
    }

}

const profile_update = async(req, res) =>{
    try {
        const user_id = req.body.user_id;
        const name = req.body.name;
        const ig = req.body.instagram;
        const linkedin = req.body.linkedin;
        const github = req.body.github;
        const short_bio = req.body.short_bio;
        const data = await User.findOne({_id: user_id});
        if(data){
            const updated_data = await User.findByIdAndUpdate({_id:data._id}, {$set: {name:name, instagram:ig, 
                linkedin:linkedin, github: github, short_bio: short_bio}},{new:true});
            res.status(200).send({success:true, msg: "User password reset successful", data:updated_data});

        }else{
            res.status(200).send({success: false, msg:"User not found"})
        }
    } catch (error) {
        res.status(500).send({success:false, msg:"Some Error Occured"})
    }
}

const password_update = async(req, res) =>{
try {
    const user_id = req.body.user_id;
    const password = req.body.password;
    const data = await User.findOne({_id: user_id});
    if(data){
        const newPassword = await securePassword(password);
        const update = await User.findByIdAndUpdate({_id:user_id}, {$set:{
            password:newPassword
        }});
        if(update){
            res.status(200).send({success: true, msg:"Password Updated"});

        }else{
            res.status(200).send({success: false, msg:"Error Updating password, please try later"})

        }

    }else{
        res.status(200).send({success: false, msg:"User not found"})
    }
    
} catch (error) {
    res.status(400).send(error.message);
}
}



const password_reset = async(req, res)=>{
    try {
        const email = req.body.email;
        const userData = await User.findOne({email: email});
        if(userData){
            const random = await randomstring.generate();
            const data = await User.updateOne({email: email}, {$set:{password_token:random}});
            console.log(userData)
            
            resetpasswordmail(userData.name, userData.email, random);
            res.status(200).send({success:true, msg:"OTP has send to your email"});
        }
        else{
            res.status(400).send({success:false, msg:"User with this email does not exists"});

        }
    } catch (error) {
        res.status(400).send({success:false, msg:error.message});
    }
}

const reset_password_validate = async(req, res)=>{
    try {
        const token = req.query.token;
        const email = req.query.email;
        const tokenData = await User.findOne({ email: email, password_token: token});
        if(tokenData){
            const password = await securePassword(req.body.password);
            const User_password = await User.findByIdAndUpdate({_id:tokenData._id}, {$set:{password: password, password_token: ''}}, {new:true});
            if(User_password){
                res.status(200).send({success:true, msg: "User password reset successful", data:User_password});

            }else{
                res.status(500).send({success:false, msg: error.message});
            }



        }else{
            res.status(200).send({success:false, msg: "This token is no longer working"})
        }
    } catch (error) {
        res.status(400).send({success:false, msg:error.message})
    }
}

const user = async(req, res)=>{
    try {
        const user_id = req.query.user_id;
        const user_Data = await User.findOne({_id: user_id})
        if(user_Data) {
            res.status(200).send({success:true, msg: "User password reset successful", data:user_Data});
        }else{
            res.status(500).send({success:false, msg: error.message});
        }
        
    } catch (error) {
        res.status(400).send({success:false, msg:error.message})

    }

}


module.exports = {
    register_user,
    user_login,
    profile_update,
    password_update,
    password_reset,
    reset_password_validate,
    user
}