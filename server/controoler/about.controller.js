const About = require("../model/About.js");

exports.about_create = async (req, res) => {
    try {
        const { bio, eduction, dateofBirth, location, email, phone, language } = req.body
        await About.create({ bio, eduction, dateofBirth, location, email, phone, language })
        res.status(200).json({ message: 'succes' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.about_read = async (req, res) => {
    try {
        const result = await About.find()
        res.status(200).json({ message: "success", result })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.about_update = async (req, res) => {
    try {
        const { lid } = req.params
        const { bio, eduction, dateofBirth, location, email, phone, language } = req.body

        await About.findByIdAndUpdate(lid, { bio, eduction, dateofBirth, location, email, phone, language })
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.about_delete = async (req, res) => {
    try {
        const { lid } = req.params
        await About.findByIdAndDelete(lid)
        res.status(200).json({ message: 'succcess' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "fail" })
    }
}