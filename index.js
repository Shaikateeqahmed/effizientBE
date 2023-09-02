const express = require("express");
const {connection} = require("./ConnectionToMongoDB/conneciton.js");
const {Data} = require("./Routes/DataRoute.js");
const cors = require("cors");
require("dotenv").config();

const app = express();


app.use(cors());
app.use(express.json());
app.use("/data",Data);

app.listen(process.env.Port,async()=>{
    await connection;
    console.log(`server is running on port ${process.env.Port}`);
})