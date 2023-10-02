const express = require('express')
const verifyToken = require('../middleware/verify')
const router = express.Router()
const { create, single_course, all_course, upload, delete_course } = require('../controller/course')


router.post('/create', verifyToken, create)
router.get('/single/:id', single_course)
router.get('/all', all_course)
router.post('/upload/:id', upload)
router.delete('/delete/:id',verifyToken, delete_course)

module.exports = router