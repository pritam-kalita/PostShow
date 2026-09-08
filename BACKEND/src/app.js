const express = require("express")
const postModel = require("./models/posts.model")
const cors = require('cors');





const app = express()
app.use(express.json())
app.use(cors())



const post = []

app.post('/create-tweet',async(req,res)=>{

    const data = req.body

    

    const tweet = await postModel.create({
        tweet:data.tweet,
        tag:data.tag
    })

    return res.status(200).json({
        message:"post uploaded succesfully",
        tweet
        
    })
    
})




app.get('/get-tweet',async(req,res)=>{
    

     const tweetdata= await postModel.find();

     const tweet = tweetdata.tweet
     const tag= tweetdata.tag
    
    return res.status(201).json({
        message:"tweet fetched",
        tweet:tweetdata
    })
    
})






module.exports=app
