const express = require('express');
const user_route = express()
const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));

const multer = require('multer');
const path = require('path');
const auth = require('../middlewares/auth');
user_route.use(express.static('public'));
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, path.join(__dirname, '../public/avatar'), function(e, s){
            if(e) throw e;
        })
    },
    filename: function(req, file, cb){
        const name = 'qbytespace-avatar-'+ Date.now()+'-'+file.originalname;
        cb(null, name, function(error1, success1){
            if(error1) throw error1;
        })
    }
});

const upload = multer({storage: storage});
const user_controller = require('../controllers/userController');
user_route.post('/register', user_controller.register_user);
user_route.post('/login', user_controller.user_login);
user_route.post('/password-update', auth, user_controller.password_update); //Requires user_id, password and token in header
user_route.post('/password-reset', user_controller.password_reset); //Requires user email
user_route.post('/reset-password', user_controller.reset_password_validate);  // requires new password
user_route.post('/profile-update', auth, user_controller.profile_update); //Requires user_id, password and token in header
user_route.get('/user', user_controller.user);
module.exports = user_route;