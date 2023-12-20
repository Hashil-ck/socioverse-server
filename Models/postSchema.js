const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true

    },
    category:{
        type:Array
    },
    description:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})


const posts = mongoose.model('posts',postSchema)
module.exports = posts