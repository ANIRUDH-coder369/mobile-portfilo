const mongoose = require('mongoose')

module.exports = mongoose.model("input02", new mongoose.Schema({
    name: { type: String, require: true },
    headline: { type: String, require: true },
    input01: { type: String, require: true },
    input02: { type: String, require: true },
    input03: { type: String, require: true },
}, { timestamps: true }))