const mongoose = require('mongoose');
 
const searchModel = mongoose.Schema({
    search_query:{
        type:String,
        require:true
    },
    searched_on:{
        type: Date,
        default: Date.now()
    },
 

});
 
module.exports =  mongoose.model('searchModel', searchModel);;