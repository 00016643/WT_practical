const express = require("express")
const body_parser = require("body-parser")

const path = require("path")

global.mock_db = path.join(__dirname, "./data/mock_db.json")
const web_route = require("./routes/web/home")

const app = express()
app.set("view engine", "pug")

app.use("/css", express.static("public/css"))
app.use("/js", express.static("public/js"))

app.use("/", web_route)

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`app is working in http://localhost:${PORT}/`)
})