const express = require("express")
const body_parser = require("body-parser")


const path = require("path")

global.mock_db = path.join(__dirname, "./data/mock_db.json")

const app = express()

app.get("/", (req, res) =>{
    return res.json({
        message: "Hello world"
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`app is working in http://localhost:${PORT}/`)
})