const restaurants = require("../models/Restaurants");

//get All Restaurants
exports.getRestaurents=(req,res)=>{
    restaurants.find({}).exec((err,Restaurant)=>{
        if(err){
            return res.status(400).json({
                error:'Something went wrong'
            })
        }
        return res.json({
            data:Restaurant,
            mesaage:'Restaurants detail fetched successfully'
        })
    })
}