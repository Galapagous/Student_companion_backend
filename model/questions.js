const mongoose = require('mongoose')
const {Schema} = mongoose

const question_schema = new Schema(
    {
        course_id:{
            type: String,
            required: true
        },
        question_string:{
            type: String,
        },
        options:[String]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Question_schema', question_schema)