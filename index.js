//importing dependencies
var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const {NODE_PORT,DATABASE_URL}=process.env;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));


//connecting to Database
const connection=mongoose.connect(DATABASE_URL,{
    useUnifiedTopology:true, 
    useNewUrlParser: true  
}).then(()=>{
    app.listen(NODE_PORT,()=>{
        console.log(`server is running on ${NODE_PORT}`);
    })
}).catch((err)=>{
    console.log(`DB connection failed ${err}`);
})

const routes=require("./routes/RestaurantRoutes");
app.use(routes)
module.exports=connection;
 