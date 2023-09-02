const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    Email : String,
    Full_Name : String,
    Age : String,
    Education : String,
    Institute :  String,
    Study : String,
    Admition : String,
    Program : String,
    Country : String,
    Goauls : String,
    Elistening : String,
    Ereading : String,
    Espeaking : String,
    Ewriting : String,
    Fee : String,
    GIC : String
})

const DataModel = mongoose.model("Data",DataSchema);

module.exports={DataModel};