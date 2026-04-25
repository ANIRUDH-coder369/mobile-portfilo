
const project = require("../model/project.js");


exports.project_create_02 = async (req, res) => {
    try {
        const { text, link01, link02 } = req.body
        await project.create({ text, link01, link02 })
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}


exports.project_get = async (req, res) => {
    try {
        const result = await project.find()
        res.status(200).json({ message: 'success', result })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.project_update = async (req, res) => {
    try {
        const { pid } = req.params
        const { text, link01, link02 } = req.body
        await project.findByIdAndUpdate(pid, { text, link01, link02 })
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.project_delete = async (req, res) => {
    try {
        const { pid } = req.params
        await project.findByIdAndDelete(pid)
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}