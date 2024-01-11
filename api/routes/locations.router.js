const express = require("express")
const locationsController = require("../controllers/locations.controller")
const locationsMiddleware = require("..//middlewares/locations.middleware")
var router = express.Router()

router.get("/", locationsController.getLocations)

router.get("/:id/events", locationsMiddleware.validateLocationId, locationsController.getLocationEvents)

router.get("/:id", locationsMiddleware.validateLocationId, locationsController.getLocationById)

module.exports = router