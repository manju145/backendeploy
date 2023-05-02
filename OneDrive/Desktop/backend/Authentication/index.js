const express = require("express");
const {connection} = require("./db")
const {userRouter} = require("./routes/User.routes")
// const jwt = require("jsonwebtoken")
const {auth} = require("./middleware/auth.middleware")
const {noteRouter} =require("./routes/Notes.route")
require("dotenv").config()

const app = express();

app.use(express.json());
app.use("/user",userRouter)


app.use(auth)
app.use("/notes",noteRouter)


app.listen(process.env.port,async()=>{
    try{
await connection
console.log("Connect to the DB")
    }
    catch(err){
console.log(err)
console.log("cannot connect to the DB")
    }
    console.log(`Server is runing at port ${process.env.port}`);
})