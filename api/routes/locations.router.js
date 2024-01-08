const express = require("express")
const locationsController = require("../controllers/locations.controller")
var router = express.Router()

router.get("/", locationsController.getLocations)

router.get("/:id/events", locationsController.getLocationEvents)

router.get("/:id/stand", locationsController.getStand)

module.exports = router