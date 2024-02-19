const express = require("express")
const router = express.Router()

const home_controller = require("../../../controller/web/home")

router
    .get('/', home_controller.index)
    .get("/add", home_controller.add)
    .get("/update", home_controller.update)

module.exports = router