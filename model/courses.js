const mongoose = require('mongoose')
const {Schema} = mongoose

const course_schema = new Schema(
    {
        title:{
            type: String,
            required: true,
            unique: true
        },
        author:{
            type: String,
            required: true
        },
        description:{
            type: String,
        },
        files:{
            type: [String],
        }
    }
)

module.exports = mongoose.model('Course', course_schema)