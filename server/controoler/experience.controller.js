const Input = require("../model/Input.js");

exports.create = async (req, res) => {
    try {
        const { input01, text01, input02, text02, input03, text03 } = req.body

        await Input.create({ input01, text01, input02, text02, input03, text03 })

        res.status(200).json({ message: "success" })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.read = async (req, res) => {
    try {
        const result = await Input.find()
        res.status(200).json({ message: 'success', result })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fails' })
    }
}

exports.update = async (req, res) => {
    try {
        const { uid } = req.params
        const { input01, text01, input02, text02, input03, text03 } = req.body
        await Input.findByIdAndUpdate(uid, { input01, text01, input02, text02, input03, text03 })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.deleteInout = async (req, res) => {
    try {
        const { uid } = req.params
        await Input.findByIdAndDelete(uid)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}