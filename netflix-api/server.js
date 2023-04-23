const express =require('express');
const cors=require("cors");
const mongoose = require("mongoose");
const dynamo=require('dynamodb');
const userRoutes = require("./routes/UserRoute");
const path=require("path");
require('aws-sdk/lib/maintenance_mode_message').suppress = true;

"use strict";

const app=express();
dynamo.AWS.config.update({accessKeyId:process.env.accessKeyId, secretAccessKey: process.env.secretAccessKey, region: process.env.region},()=>console.log("Connected"));
app.use(cors());
app.use(express.json());

//app.use("/api/user",userRoutes);


app.listen(5001,console.log("server started!!"));

const _dirname = path.dirname("");
console.log(_dirname);
const buildpath = path.join(_dirname , "../build");
console.log(buildpath)
app.use(express.static(buildpath)) 
app.get("/*", function(req, res){
    console.log("here");
    res.sendFile(
        path.join(__dirname,"../build/index.html"),
        
        function(err){
            if(err){
                res.status(500).send(err);
            }
        }
    );
});//