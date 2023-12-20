const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')


// register
exports.userRegister = async (req,res) =>{
    const {name, email, password} = req.body
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("User already exist... please login!!!")

        } else {
            const newUser = new users({
                name,  email, password
            })
            await newUser.save()
            res.status(200).json(newUser)

        }
    }
    catch (err) {
        res.status(401).json(`error transaction failed :${err}`)

    }
}

//login
exports.userLogin = async (req,res) =>{
    const {email, password} = req.body
    try {
        const existingUser = await users.findOne({ email,password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, process.env.SECRET )
            res.status(200).json({
                existingUser,
                "role": "User",
                token
            })
        }else{
            res.status(404).json("incorrect email or password")

        }
    }
    catch(err) {
        res.status(401).json(`error transaction failed :${err}`)

    }
}