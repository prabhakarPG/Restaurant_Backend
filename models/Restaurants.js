const {Schema,model} = require("mongoose");

const HotelDetails = new Schema({
    "Restaurant ID" :{
        type:String,
        required:true,
        unique: true
    },
    "Restaurant Name" :{
        type:String,
        required:true
    },
    "Country Code" :{
        type:Number,
        required:true
    },
    "City" :{
        type:String,
        required:true
    },
    "Address" :{
        type:String,
        required:true
    },
    "Cuisines" :{
        type:String,
        required:true
    },
    "Average Cost for two" :{
        type:Number,
    },
    "Has Table booking" :{
        type:Boolean,
    },
    "Number of tables" :{
        type:Number,
    },

},{
    collection : 'HotelDetails'
},
{
   timestamps:true
});
module.exports=model('restaurants',HotelDetails);

//Restaurant ID	Restaurant Name	Country Code	City	Address	Cuisines	Average Cost for two	Has Table booking	Number of tables
