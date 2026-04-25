const Message = require("../model/Message.js");

exports.createMessage = async (req, res) => {
    try {
        const { name, subject, email, message } = req.body
        const result = await Message.findOne({ email })

        if (result) {
            return res.status(400).json({ message: "error" })
        }
        await Message.create({ name, email, subject, message })

        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'error' })
    }
}

exports.readMessage = async (req, res) => {
    try {
        const result = await Message.find()
        res.status(200).json({
            message: "success",
            result
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'error' })

    }
}

exports.updateMessage = async (req, res) => {
    try {
        const { uid } = req.params
        const { name, email, message, subject } = req.body

        await Message.findByIdAndUpdate(uid, { name, email, message, subject })

        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })

    }
}

exports.deleteMessage = async (req, res) => {
    try {
        const { uid } = req.params

        await Message.findByIdAndDelete(uid)
        res.status(200).json({ message: "success" })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "errror" })
    }
}