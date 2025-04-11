const express=require('express')
const { dbconnection } = require('./config/dbconnect')
const { router } = require('./route/routes')
const app=express()
require('dotenv').config()
app.use(express.json())
app.use('/api',router)

app.listen(process.env.PORT,async(req,res)=>{
    console.log(`Server is listening at the ${process.env.PORT}`);
    await dbconnection()
})