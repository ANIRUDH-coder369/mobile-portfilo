const Infromation = require("../model/Infromation.js");

exports.create = async (req, res) => {
    try {
        const { text, yearExperience, projectComplete, technologies, happyClient } = req.body

        await Infromation.create({ text, yearExperience, projectComplete, technologies, happyClient })
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.read = async (req, res) => {
    try {
        const result = await Infromation.find()
        res.status(200).json({ message: 'success', result })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.update = async (req, res) => {
    try {
        const { uid } = req.params
        const { text, yearExperience, projectComplete, technologies, happyClient } = req.body

        await Infromation.findByIdAndUpdate(uid, { text, yearExperience, projectComplete, technologies, happyClient })
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.remove = async (req, res) => {
    try {
        const { uid } = req.params
        await Infromation.findByIdAndDelete(uid)
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}