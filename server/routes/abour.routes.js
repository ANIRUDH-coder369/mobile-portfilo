const { about_create, about_read, about_update, about_delete } = require('../controoler/about.controller.js')

const router = require('express').Router()

router
    .post("/about_create", about_create)
    .get("/about_read", about_read)
    .put("/about_update/:lid", about_update)
    .delete("/about_delete/:lid", about_delete)

module.exports = router