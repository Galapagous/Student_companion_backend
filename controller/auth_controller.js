const jwt = require('jsonwebtoken')
const User = require('../model/user')
const bcrypt = require('bcrypt')


const login = async(req, res)=>{
    const login_details = req.body
    if (login_details){
        const user = await User.findOne({email: login_details.email})
        if (!user){
            res.status(400).json('Invalid Email')
        }else{
            if(bcrypt.compareSync(req.body.password, user.password)){
                const {password, ...others} = user._doc
                const token = jwt.sign({id: user._doc._id.toString()},process.env.ACCESS_TOKEN)
                res.cookie('accesstoken', token, {httpOnly: true}).status(200).json(others)
            }else{
                res.status(400).json('Invalid password')
            }
        }
    }else{
        res.status(400).json('Kindly provide the neccesary login details')
    }
}


const logout = (req, res)=>{
    try {
        res.clearCookie('accesstoken',{sameSite: 'none', security: true}).status(200).json('User successfully logged out')
    } catch (error) {
        res.status(500).json(error)
    }
}


const register = async(req, res)=>{
    const user_data = req.body
    if(user_data){
        try {
            const hash_password = user_data.password
            const encrypted_password = bcrypt.hashSync(hash_password, salt)
            const new_user = new User({
                ...req.body,
                password: encrypted_password
            })
            await new_user.save()
            res.status(200).json(new_user)
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(400).json('Kindly provide the necessary information')
    }
}


module.exports = {login, logout, register}