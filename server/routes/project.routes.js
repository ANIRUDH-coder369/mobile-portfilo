const { project_get, project_create_02, project_update, project_delete } = require("../controoler/project.controller.js")

const router = require("express").Router()

router

    .post("/createProject_02", project_create_02)
    .get("/getProject", project_get)
    .put("/updateProject/:pid", project_update)
    .delete("/deleteProject/:pid", project_delete)

module.exports = router