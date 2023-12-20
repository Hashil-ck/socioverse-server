const posts = require('../Models/postSchema')
const jwt = require('jsonwebtoken')

exports.addPosts = async(req,res)=>{
    const {title,image,category,description,authorName,date,created_at} = req.body
    const userId = req.payload
    try {
        const result = new posts({
            userId,title,image,category,description,authorName,date,created_at
        })
        await result.save()
        res.status(200).json(result)
    } catch (err) {
        res.status(401).json('Transaction failed!!! ',err)
    }
}

exports.getPosts = async(req,res)=>{
    const query=req.query
    
    try {
        const searchFilter={
            category:{$regex:query.search, $options:"i"}
        }
       const result =  await posts.find(query.search?searchFilter:null).sort({ 'created_at': -1 })
       
        res.status(200).json(result)
    } catch (err) {
        res.status(401).json('Transaction failed!!! ',err)
    }
}
exports.getPost = async(req,res)=>{
    const {id} = req.params
    try {
       const result =  await posts.findOne({_id:id})
       
        res.status(200).json(result)
    } catch (err) {
        res.status(401).json('Transaction failed!!! ',err)
    }
}
exports.deletePost = async(req,res)=>{
    const {_id} = req.body
    try {
        
        const result=await posts.findByIdAndDelete({_id})
        res.status(200).json(result)
    } catch (err) {
        res.status(401).json('Transaction failed!!! ',err)
    }
}

