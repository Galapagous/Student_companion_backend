const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verify')


router.post('/login', (req,res)=>{
    res.send('login requested')
})


module.exports = router