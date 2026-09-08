const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    tweet: String,
    tag: String
})

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
