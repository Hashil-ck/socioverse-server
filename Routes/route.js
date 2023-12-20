const express = require('express')
const { userRegister, userLogin } = require('../Controller/userController')
const router = new express.Router()
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const { addPosts, getPosts, getPost, deletePost, editPost, created_at} = require('../Controller/postsController')
const { addComment, getComment, deleteComment } = require('../Controller/commentController')

router.post('/user/register',userRegister)
router.post('/user/login',userLogin)
router.post('/add/post',jwtMiddleware,addPosts)
router.get('/get/post',getPosts)
router.get('/get/post/:id',getPost)
router.delete('/delete/post',deletePost)
router.post('/add/comment',jwtMiddleware,addComment)
router.post('/get/comment',getComment)
router.delete('/delete/comment',deleteComment)

module.exports=router