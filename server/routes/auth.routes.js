const { phonePost, phoneGet, phoneUpdate, phoneDelete } = require('../controoler/auth.controller.js')

const router = require('express').Router()

router
    .post("/phonePost", phonePost)
    .get("/phoneGet", phoneGet)
    .put("/phoneUpdate/:cid", phoneUpdate)
    .delete("/phoneDelete/:cid", phoneDelete)


module.exports = router