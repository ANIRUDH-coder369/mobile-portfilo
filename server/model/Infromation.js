const mongoose = require('mongoose')

module.exports = mongoose.model("infromation", new mongoose.Schema({
    text: { type: String, require: true },
    yearExperience: { type: String, require: true },
    projectComplete: { type: String, require: true },
    technologies: { type: String, require: true },
    happyClient: { type: String, require: true }
}, { timestamps: true }))