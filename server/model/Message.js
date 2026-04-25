const mongoose = require('mongoose')

module.exports = mongoose.model("message", new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    subject: { type: String, require: true },
    message: { type: String, require: true },
}, { timestamps: true }))