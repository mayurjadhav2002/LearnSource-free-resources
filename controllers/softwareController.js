const Software = require('../models/SoftwareCoupons');
const pagination = async(req, res) =>{
    try {
        var page = req.body.page || req.query.page;
        var cat = req.query.cat || 'all';
        var productdata;
        var skip;
        const limit = 20;
        if(page <=1){
skip = 0;
        }else{
            skip = (page - 1) * limit;
        }
        if (cat === 'all' ){
            productdata = await Software.find().sort({'created_on':'ascending'}).skip(skip).limit(limit)
        }else{
            productdata = await Software.find({'category': cat}).sort({'created_on':'ascending'}).skip(skip).limit(limit)

        }
      
        
        res.status(200).send({ success: true, data: productdata });

        
    } catch (error) {
        res.status(400).send({ success: false, msg: "No blog found" });

    }
}

const topCards = async(req, res) =>{
    try {
   
        var productdata;
        const limit =10;
  
        productdata = await Software.find().sort({'created_on':'ascending'}).limit(limit)
       
      
        
        res.status(200).send({ success: true, data: productdata });

        
    } catch (error) {
        res.status(400).send({ success: false, msg: "No blog found" });

    }
}


const coupon_by_id = async (req, res) => {
    try {
        const id = req.query.id || req.body.id;
        const coupon = await Software.findByIdAndUpdate({ _id: id }, { $inc: { views: 1 } })

        if (coupon) {
            res.status(200).send({ success: true, coupon: coupon });

        } else {
            res.status(200).send({ success: false, msg: "Some Error Occured or Coupon not Exists", error: error.msg })

        }


    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again", error: error.message });

    }
}

const get_total = async(req,res) =>{
    try {
        const cat = req.query.cat || 'all';
        var total;
        if(cat === 'all'){
            total = await Software.find().count()

        }else{
            total = await Software.find({'category': cat}).count()

        }
        if(total){
            res.send({total})
        }else{
            res.status(400).send({"msg":"Some error Occured"})
        }
    
    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });
    
    }
    }

module.exports = {pagination, coupon_by_id, get_total, topCards}