const { create, read, update, deleteInout } = require('../controoler/experience.controller.js')

const router = require('express').Router()

router
    .post("/createInput", create)
    .get("/readInput", read)
    .put("/updateInput/:uid", update)
    .delete("/deleteInput/:uid", deleteInout)

module.exports = router
