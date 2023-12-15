const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: Number,
    dueDate: Date
});

module.exports = mongoose.model('Task', TaskSchema);
