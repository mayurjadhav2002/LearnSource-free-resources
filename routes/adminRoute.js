const express = require('express');
const admin = express()
const bodyParser = require('body-parser');



admin.use(bodyParser.json());
admin.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');
const imageModel = require('../models/imageModel');
admin.use(express.static('public'));
var name = '';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/Blogs/static'), function (e, s) {
            if (e) throw e;
        })
    },
    filename: function (req, file, cb) {
        name = 'qbytespace-thumbnail-' + Date.now() + '-' + file.originalname;
        cb(null, name, function (error1, success1) {
            if (error1) throw error1;

        })
    }
});

const upload = multer({ storage: storage });
// const admin_controller = require('../controllers/adminController');

admin.post('/image', upload.single('image'), async(req, res) => {
    try {

        const image = new imageModel({
            user: req.body.name || 'undefined',
            created_by: req.body.id || 'undefined',
            image: name
        })
        const data = image.save();
        if(data){ 
            res.status(200).send({ msg: "data uploaded", url: image }) }
        else {
            res.status(400).send({ msg: "error uploading the data" });
        }
        // res.status(200).send({ msg: "Image Uploaded Successfully", image: name })

    } catch (e) {
        res.status(401).send({msg: error.message});
        console.log(e)
    }
});
// console.log(name)



module.exports = admin;