const { createMessage, readMessage, updateMessage, deleteMessage } = require('../controoler/message.controller.js')

const router = require('express').Router()

router
    .post("/create", createMessage)
    .get("/read", readMessage)
    .put("/update/:uid", updateMessage)
    .delete("/delete/:uid", deleteMessage)

module.exports = router