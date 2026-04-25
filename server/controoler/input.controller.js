const Input02 = require("../model/Input02.js");

exports.input02 = async (req, res) => {
    try {
        const { name, headline, input01, input02, input03 } = req.body
        await Input02.create({ name, headline, input01, input02, input03 })
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "fail" })
    }
}

exports.read = async (req, res) => {
    try {
        const result = await Input02.find()
        res.status(200).json({ message: 'success', result })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.update = async (req, res) => {
    try {
        const { cid } = req.params
        const { name, headline, input01, input02, input03 } = req.body
        await Input02.findByIdAndUpdate(cid, { name, headline, input01, input02, input03 })
        res.status(200).json({ message: 'update success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.deleteInput = async (req, res) => {
    try {
        const { cid } = req.params
        await Input02.findByIdAndDelete(cid)
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}