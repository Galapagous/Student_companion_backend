const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next)=>{
    const token = req.headers.cookie.split('=')[1]
    if (!token) res.status(400).json('You are not authenticated')
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, payload)=>{
        if(err){
            res.status(400).json('Token not valid')
        }
        req.userId = payload.id
        console.log('i finished')
        next()
    })
}

module.exports = verifyToken