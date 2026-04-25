require('dotenv').config()
const cors = require('cors')
const express = require('express')
const cookieParser = require('cookie-parser')

const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use(cors({
    origin: true
}))
app.use(cookieParser())
app.use("/api/contact", require("./routes/auth.routes.js"))
app.use("/api/message", require("./routes/message.routes.js"))
app.use("/api/input", require("./routes/input.routes.js"))
app.use("/api/project", require("./routes/project.routes.js"))
app.use("/api/input02", require("./routes/input02.routes.js"))

app.use("/api/about", require("./routes/abour.routes.js"))
app.use("/api/infromation", require("./routes/infromation.routes.js"))

app.use("/api/skills", require("./routes/skills.routes.js"))

app.use("/api/admin", require("./routes/Admin.routes.js"))

mongoose.connection.once("open", () => {
    console.log('db connect');
    app.listen(process.env.PORT, () => {
        console.log('server runing....');

    })
})