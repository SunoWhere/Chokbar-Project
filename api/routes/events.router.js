const express = require("express")
const eventsController = require("../controllers/events.controller")
const eventsMiddleware = require("../middlewares/events.middleware")
var router = express.Router()

router.get("/", eventsController.getEvents)
router.get("/:id")

router.post("/")

router.put("/:id")

router.delete("/:id")

module.exports = router