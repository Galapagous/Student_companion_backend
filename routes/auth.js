const express = require('express')
const router = express.Router()
const {login, logout, register} = require('../controller/auth_controller')

// -------------Authentication routes---------------
router.post('/login', login)
router.post('/logout', logout)
router.post('/register', register)


module.exports = router