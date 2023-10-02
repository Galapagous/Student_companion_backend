const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const AuthRoute = require('./routes/auth')
const CourseRoute = require('./routes/course')
const QuestionRoute = require('./routes/question')
app.use(express.json())
app.use(cors({
    origin: '*'
}))
require('dotenv').config()


// -----------connect to database-------------
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to database')
    } catch (error) {
        console.log(`Error connecting to database ${error}`)
    }
}
connect()
// -----------setup different routes-------------
app.get('/', (req,res)=>{
    res.send('Hello from backend')
})

app.use('/api/auth', AuthRoute)
app.use('/api/course', CourseRoute)
app.use('/api/question', QuestionRoute)



app.listen(process.env.PORT, ()=>{
    console.log(`server listening on ${process.env.PORT}`)
})