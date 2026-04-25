const mongoose = require('mongoose')

module.exports = mongoose.model("contact", new mongoose.Schema({
    email: { type: String, require: true },
    phone: { type: String, require: true },
    location: { type: String, require: true },
    link01: { type: String, require: true },
    link02: { type: String, require: true },
}, { timestamps: true }))
