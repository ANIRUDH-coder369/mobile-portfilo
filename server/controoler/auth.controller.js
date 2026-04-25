const contact = require("../model/contact.js");

exports.phonePost = async (req, res) => {
    try {
        const { email, phone, location, link01, link02 } = req.body


        await contact.create({ email, phone, location, link01, link02 })
        res.status(200).json({ message: "success" })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'error' })
    }
}

exports.phoneGet = async (req, res) => {
    try {
        const result = await contact.find()
        res.status(200).json({ message: 'success', result })
    } catch (error) {
        console.log('error');
        res.status(400).json({ message: "phoneget error" })
    }
}

exports.phoneUpdate = async (req, res) => {
    try {
        const { cid } = req.params
        const { email, phone, location, link01, link02 } = req.body
        const obj = {}
        if (email) obj.email = email
        if (phone) obj.phone = phone
        if (location) obj.location = location
        if (link01) obj.link01 = link01
        if (link02) obj.link02 = link02


        await contact.findByIdAndUpdate(cid, obj, { runValidators: true })

        res.status(200).json({ message: "phoneUpdate success" })
    } catch (error) {
        console.log('db connecr');
        res.status(400).json({ message: "error" })
    }
}

exports.phoneDelete = async (req, res) => {
    try {
        const { cid } = req.params

        await contact.findByIdAndDelete(cid)
        res.status(200).json({ message: 'phoneDelete success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'error' })
    }
}