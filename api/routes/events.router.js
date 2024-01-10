const express = require("express")
const eventsController = require("../controllers/events.controller")
const eventsMiddleware = require("../middlewares/events.middleware")
var router = express.Router()

router.get("/", eventsController.getEvents)

router.post("/:id/images", eventsMiddleware.validateEventId, eventsController.addEventImage)

router.get("/:id", eventsMiddleware.validateEventId, eventsController.getEventByID)

router.post("/", eventsController.addEvent)

router.put("/:id", eventsMiddleware.validateEventId, eventsController.updateEvent)

router.delete("/:id", eventsMiddleware.validateEventId, eventsController.deleteEvent)

module.exports = router