require("dotenv").config()
const express = require("express")
const Razorpay = require("razorpay")
const razorpay =require("razorpay")
const cors = require("cors")
const crypto = require("crypto")

const app = express()
const PORT = process.env.PORT 

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

app.post("/order", async(req,res)=>{
    const razorpay = new Razorpay({
        key_id:process.env.RAZORPAY_ID,
        key_secret:process.env.RAZORPAY_SECRET
    })
    
    try{
    const options = req.body
    const order = await razorpay.orders.create(options)
    if(!order){
        return res.status(500).send("error")
    }
    res.json(order)
    }catch(err){
        console.log(err);
        res.status()
    }
})

app.post("/order/validate", async(req,res)=>{
})

app.listen(PORT,()=>{
    console.log("server started");
})