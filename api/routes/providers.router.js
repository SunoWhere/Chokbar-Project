const express = require("express")
const providersController = require("../controllers/providers.controller")
const providersMiddleware = require("../middlewares/providers.middleware")
var router = express.Router()

router.get("/")
router.get("/:uuid")

router.post("/")

router.put("/:uuid")

router.delete("/:uuid")

module.exports = router