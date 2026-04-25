const mongoose = require('mongoose')

module.exports = mongoose.model("input", new mongoose.Schema({
    input01: { type: String, require: true },
    text01: { type: String, require: true },
    input02: { type: String, require: true },
    text02: { type: String, require: true },
    input03: { type: String, require: true },
    text03: { type: String, require: true },
}, { timestamps: true }))