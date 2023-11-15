const express = require("express")
const providersController = require("../controllers/providers.controller")
const providersMiddleware = require("../middlewares/providers.middleware")
var router = express.Router()

router.get("/")
router.get("/:id")

router.post("/")

router.put("/:id")

router.delete("/:id")

module.exports = router