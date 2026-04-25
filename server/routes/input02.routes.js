const { input02, read, update, deleteInput } = require('../controoler/input.controller.js')

const router = require('express').Router()

router
    .post("/inputCreate", input02)
    .get("/read", read)
    .put("/update/:cid", update)
    .delete("/delete/:cid", deleteInput)

module.exports = router