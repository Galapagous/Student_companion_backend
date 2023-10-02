const Question = require('../model/questions')
const express = require('express')
const router = express.Router()
const {questGen} = require('../controller/huggingFace')
const {all_question, single_question, create_question} = require('../controller/question')

router.get('/all', all_question)
router.get('/single/:id', single_question)
router.post('/question/:id', create_question)

module.exports = router
