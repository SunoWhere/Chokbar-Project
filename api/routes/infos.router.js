const express = require("express")
const infosController = require("../controllers/infos.controller")
const infosMiddleware = require("../middlewares/infos.middleware")
var router = express.Router()

router.get("/name", infosController.getName)
router.get("/dates", infosController.getDates)

router.put("/name", infosMiddleware.validateName, infosController.updateName)
router.put("/dates", infosMiddleware.validateDates, infosController.updateDates)

module.exports = router