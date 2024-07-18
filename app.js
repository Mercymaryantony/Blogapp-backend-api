const Express = require("express")
const Mongoose = require("mongoose")
const Jwt = require("jsonwebtoken")
const Bcrypt = require("bcrypt")
const Cors = require("cors")

let app= Express()
app.use(Express.json())
app.use(Cors())

app.get("/",(req,res)=>{
    console.log("hello")
})

app.listen(3030,()=>{
    console.log("Server started")
})