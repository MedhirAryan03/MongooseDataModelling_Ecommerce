const express = require('express')
const app = express()
require('dotenv').config()
app.get('/',(req,res)=>{
    res.send('port 1')
})
app.get('/twitter',(req,res)=>{
    res.send('port 2')
})
app.listen(process.env.PORT,()=>{
 console.log('listening ')
}) 
