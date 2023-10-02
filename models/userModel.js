const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    short_bio: {
        type: String,
        default: ''
    },
   
    image: {
        type: String,
        required: false,
        default: "avatar.png"
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    instagram: {
        type: String,
        required: false
    },
    github: {
        type: String,
        required: false
    },
    linkedin: {
        type: String,
        required: false
    },
    website:{
        type:String,
        required: false
    },
    token: {
        type: String,
        default: ''
    },
    password_token:{
        type:String,
        default: ''
    },
    created_on: {
        type: Date,
        default: Date.now()
    },
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blogModel'
    }]


}, { timestamps: true });


userSchema.method({
    async authenticate(password) {
        return bcrypt.compare(password, this.hash_password);
    },
});

module.exports = mongoose.model('User', userSchema)