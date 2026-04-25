const { create, read, update, remove } = require('../controoler/infromation.controller.js')

const router = require('express').Router()

router
    .post("/create", create)
    .get("/read", read)
    .put("/update/:uid", update)
    .delete("/remove/:uid", remove)

module.exports = router