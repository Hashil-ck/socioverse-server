const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    postId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    }
})


const comments = mongoose.model('comments',commentSchema)
module.exports = comments