const comments = require('../Models/commentSchema')

exports.addComment = async(req,res)=>{
    const {postId,name,comment,date} = req.body
    const userId = req.payload
    try {
        const result = new comments({
            userId,postId,name,comment,date
        })
        await result.save()
        res.status(200).json(result)
    } catch (err) {
        res.status(401).json('Transaction failed!!! ',err)
    }
}

exports.getComment = async(req,res)=>{
    const {postId} = req.body
    try {
        
        const result=await comments.find({postId})
        res.status(200).json(result)
    } catch (err) {
        res.status(401).json('Transaction failed!!! ',err)
    }
}
exports.deleteComment = async(req,res)=>{
    const {_id} = req.body
    try {
        
        const result=await comments.findByIdAndDelete({_id})
        res.status(200).json(result)
    } catch (err) {
        res.status(401).json('Transaction failed!!! ',err)
    }
}

