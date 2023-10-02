const mongoose = require('mongoose');

const softwareSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    price: {
        type: String,
    },
    price_before: {
        type: String,
        default: ''
    },
   
    posted_on: {
        type: String,
        required: false
    },
    category: {
        type: String,
        
    },
    brand: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    lists:{
        type:Array,
        required: false
    },
   views:{
    type: Number,
    default: 0   }

}, { timestamps: true });




module.exports = mongoose.model('software_coupons', softwareSchema);;