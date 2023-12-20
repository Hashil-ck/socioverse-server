

const express = require('express')
require('dotenv').config()
const cors = require('cors')
const router = require('./Routes/route')
require('./DB/connection')
const socioverse = express()

socioverse.use(cors())
socioverse.use(express.json({limit: '50mb'}))
socioverse.use(router)
const PORT = 4000 || process.env.PORT

socioverse.listen(PORT, () => {
    console.log(`SocioVerse Server Started at Port :${PORT}`);
})

socioverse.get('/',(req,res)=>{
    res.send('<h1>SocioVerse Server Started and Waiting For client request!!!</h1>')
})