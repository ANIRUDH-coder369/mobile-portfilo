const skills = require("../model/skills.js");

exports.skill_create = async (req, res) => {
    try {
        const { skill } = req.body
        await skills.create({ skill })
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "fail" })
    }
}

exports.read = async (req, res) => {
    try {
        const result = await skills.find()
        res.status(200).json({ message: 'success', result })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.update = async (req, res) => {
    try {
        const { cid } = req.params
        const { skill } = req.body
        await skills.findByIdAndUpdate(cid, { skill })
        res.status(200).json({ message: 'update success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.remove = async (req, res) => {
    try {
        const { cid } = req.params
        await skills.findByIdAndDelete(cid)
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}