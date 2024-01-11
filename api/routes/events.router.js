const express = require("express")
const eventsController = require("../controllers/events.controller")
const eventsMiddleware = require("../middlewares/events.middleware")
const imagesMiddleware = require("../middlewares/images.middleware")
var router = express.Router()

router.get("/", eventsController.getEvents)

router.get("/:id", eventsMiddleware.validateEventId, eventsController.getEventByID)

router.post("/", eventsMiddleware.validateEventInput, eventsController.addEvent)

router.post("/:id/images", imagesMiddleware.validateImage, eventsMiddleware.validateEventId, eventsController.addEventImage)

router.put("/:id", eventsMiddleware.validateEventInput, eventsMiddleware.validateEventId, eventsController.updateEvent)

router.delete("/:id", eventsMiddleware.validateEventId, eventsController.deleteEvent)

module.exports = router