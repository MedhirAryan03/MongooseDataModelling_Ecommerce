const express = require('express')
const app = express()
require('dotenv').config()
app.get('/',(req,res)=>{
    res.send('Page 1 Testing')
})
app.get('/secondpage',(req,res)=>{
    res.send('Page 2 Testing')
})
app.listen(process.env.PORT,()=>{
 console.log('listening to the server')
}) 
