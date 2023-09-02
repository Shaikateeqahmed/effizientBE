const express = require("express");
const { DataModel } = require("../Modules/DataModule");
const {mailfun} = require("../MiddleWares/mail.js");

const Data = express.Router();



Data.post("/",mailfun,async(req,res)=>{
    let newData = new DataModel(req.body);
    await newData.save();
    res.json("Data Saved Successfully!");
})

module.exports={Data};