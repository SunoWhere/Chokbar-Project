const express = require("express")
const usersController = require("../controllers/users.controller")
const usersMiddleware = require("../middlewares/users.middleware")
var router = express.Router()

/*
    TODO : faire en sorte de return le titre du role plutôt que la valeur id_role
 */

router.get("/", usersController.getUsers)
router.post("/login", usersMiddleware.validateLoginInput, usersController.verifyLogin)
router.get("/role/:uuid", usersMiddleware.validateUuid, usersController.getUserRole)
router.get("/:uuid", usersMiddleware.validateUuid, usersController.getUserByID)

router.post("/", usersMiddleware.validateUserInput, usersController.saveUser)

router.put("/:uuid", usersMiddleware.validateUuid, usersMiddleware.validateUserInput, usersController.updateUserById)

router.delete("/:uuid", usersMiddleware.validateUuid, usersController.deleteUserById)

module.exports = router