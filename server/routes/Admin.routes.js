const { adminLogin } = require('../controoler/Admin.controller.js')

const router = require('express').Router()

router
    .post("/adminLogin", adminLogin)

module.exports = router