const express = require("express")
const eventsController = require("../controllers/events.controller")
const eventsMiddleware = require("../middlewares/events.middleware")
var router = express.Router()

router.get("/", eventsController.getEvents)
router.get("/:id")

router.post("/")

router.put("/:id")

router.delete("/:id")

// TODO : ajouter les routes pour les descriptions
router.get("/:id/descriptions/")
router.get("/:id/descriptions/:language")

router.post("/:id/descriptions/:language")

router.put("/:id/descriptions/:language")

router.delete("/:id/descriptions/:language")

// TODO ajouter les routes pour les images

module.exports = router