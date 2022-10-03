const express = require("express");
const router=express.Router();
const getRestaurent = require("../controllers/RestaurantController")
const restaurants = require("../models/Restaurants");
//const conn = require("../index.js")
router.get('/getRestaurents',(req,res)=>{
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
});



router.post('/addNewRestaurant',(req,res)=>{
    const add=new restaurants(req.body)
    add.save((err,additem)=>{
        if(err){
            return res.status(400).json({
                error:'Error Occured. Please try again'
            })
        }
        res.json({
            message:'Restaurant added succesfully'
        })
    })
 });


module.exports=router;