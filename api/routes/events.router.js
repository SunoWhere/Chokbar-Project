const express = require("express")
const eventsController = require("../controllers/events.controller")
const eventsMiddleware = require("../middlewares/events.middleware")
var router = express.Router()

router.get("/", eventsController.getEvents)

router.post("/:id/images/", eventsController.addEventImageWithId)

router.post("/:id/images", eventsController.addEventImage)

router.get("/:id", eventsController.getEventByID)

router.post("/", eventsController.addEvent)

router.put("/:id", eventsController.updateEvent)

router.delete("/:id", eventsController.deleteEvent)

module.exports = router