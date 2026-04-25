const { skill_create, remove, update, read } = require('../controoler/skills.controller.js')

const router = require('express').Router()

router
    .post('/create', skill_create)
    .get('/get', read)
    .put('/update/:cid', update)
    .delete('/delete/:cid', remove)

module.exports = router