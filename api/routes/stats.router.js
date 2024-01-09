const express = require("express")
const statsController = require("../controllers/stats.controller")
var router = express.Router()

router.get("/tickets-sales")
router.get("/products-sales")
router.get("/events-participations")

module.exports = router