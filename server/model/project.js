const mongoose = require('mongoose')

module.exports = mongoose.model("project", new mongoose.Schema({
    text: { type: String, require: true },
    link01: { type: String, require: true },
    link02: { type: String, require: true },
}, { timestamps: true }))