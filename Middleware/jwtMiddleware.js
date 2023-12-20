const jwt=require('jsonwebtoken')
const secret=process.env.SECRET
 const jwtMiddleware=(req,res,next)=>{
    try{
        console.log('inside jwt');
        const token=req.headers['authorization'].split(" ")[1]
        // console.log(token);
        const jwtResponse=jwt.verify(token,secret)
        // console.log(jwtResponse);
        req.payload=jwtResponse.userId
        next()
    }
    catch(err){
        res.status(401).json('Access Denied please login!!!')

    }
 }
module.exports=jwtMiddleware