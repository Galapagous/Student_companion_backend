const {Schema, default: mongoose} = require('mongoose')

const option_schema = new Schema(
    {
        option_string:{
            type: String,
            required: true
        },
        question_id:{
            type: String,
        },
        isCorrect:{
            type: Boolean,
            required: true
        }
    }
)

module.exports = mongoose.Schema('Option_Schema', option_schema)
