const express = require("express")
const usersController = require("../controllers/users.controller")
const usersMiddleware = require("../middlewares/users.middleware")
var router = express.Router()

router.get("/", usersController.getUsers)
router.post("/login", usersMiddleware.validateLoginInput, usersController.verifyLogin)
router.get("/:uuid", usersMiddleware.validateUuid, usersController.getUserByID)

router.post("/", usersMiddleware.validateUserInput, usersController.saveUser)

router.put("/:uuid", usersMiddleware.validateUuid, usersMiddleware.validateUserInput, usersController.updateUserById)

router.delete("/:uuid", usersMiddleware.validateUuid, usersController.deleteUserById)

module.exports = router