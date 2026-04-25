const mongoose = require('mongoose')

module.exports = mongoose.model("skills", new mongoose.Schema({
    skill: { type: String, require: true }
}, { timestamps: true }))