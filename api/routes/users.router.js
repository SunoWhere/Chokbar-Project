const express = require("express")
const usersController = require("../controllers/users.controller")
const usersMiddleware = require("../middlewares/users.middleware")
var router = express.Router()

router.get("/")
router.get("/:uuid")

router.post("/")

router.put("/:uuid")

router.delete("/:uuid")

module.exports = router