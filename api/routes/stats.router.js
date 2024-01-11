const express = require("express")
const statsController = require("../controllers/stats.controller")
var router = express.Router()

router.get("/total-users", statsController.getTotalUsers)

router.get("/total-providers", statsController.getTotalProviders)

router.get("/total-products", statsController.getTotalProducts)

router.get("/tickets-sales", statsController.getTicketsSales)

router.get("/products-sales", statsController.getProductsSales)

module.exports = router