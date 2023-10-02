const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const user_schema = new Schema(
    {
        username:{
            type: String,
            require: true,
            unique: true
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
        occupation: {
            type: String,
            require: true,
        },
        total_courses: {
            type: [String],
        },
        total_upload: {
            type: [String],
        },
        Total_question: {
            type: [String],
        },
        rating: {
            type: Number,
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', user_schema)
