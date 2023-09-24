const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    todo : String,
    isComplete : Boolean
})

// modo da singular form
const Task = mongoose.model('task',TaskSchema)

module.exports = Task