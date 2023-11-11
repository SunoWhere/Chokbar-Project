const express = require("express")
const standsController = require("../controllers/stands.controller")
const standsMiddleware = require("../middlewares/stands.middleware")
var router = express.Router()

router.get("/")
router.get("/:id")

router.post("/")

router.put("/:id")

router.delete("/:id")

module.exports = router