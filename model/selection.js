const mongoose = require('mongoose')
const {Schema} = mongoose

const selection_schema = new Schema(
    {
        question_id:{
            type: String,
            required: true
        },
        option_id:{
            type: String,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Selection_schema', selection_schema)