const mongoose = require("mongoose")

module.exports = mongoose.model("about", new mongoose.Schema({
    bio: { type: String, require: true },
    eduction: { type: String, require: true },
    dateofBirth: { type: String, require: true },
    location: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    language: { type: String, require: true },
}, { timestamps: true }))