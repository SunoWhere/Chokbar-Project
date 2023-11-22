const express = require("express")
const usersController = require("../controllers/users.controller")
const usersMiddleware = require("../middlewares/users.middleware")
var router = express.Router()

router.get("/", usersController.getUsers)
router.get("/login", usersController.verifyLogin)
router.get("/:uuid", usersController.getUserByID)

router.post("/", usersMiddleware.validateUserInput, usersController.saveUser)

router.put("/:uuid")

router.delete("/:uuid")

module.exports = router