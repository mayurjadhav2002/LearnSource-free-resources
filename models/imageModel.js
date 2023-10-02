const mongoose = require('mongoose');
 
const imageModel = mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    created_by:{
        type: String,
        default: ''
    },
    user: {
        type: String,
        default: ''
    }
    ,
    created_on:{
        type: Date,
        default: Date.now()
    },
 

});
 
module.exports =  mongoose.model('imageModel', imageModel);;