const express = require("express")
const standsController = require("../controllers/stands.controller")
const standsMiddleware = require("../middlewares/stands.middleware")
var router = express.Router()

router.get("/", standsController.getStands)
router.get("/:id", standsMiddleware.validateId, standsController.getStandById)

router.post("/", standsMiddleware.validateStandInput, standsController.saveStand)

router.put("/:id", standsMiddleware.validateId, standsMiddleware.validateStandInput, standsController.updateStandById)

router.delete("/:id",standsMiddleware.validateId, standsController.deleteStandById)

// TODO products CRUD

router.get("/:id/products/")
router.get("/:id/products/:id_product")

router.post("/:id/products/")
router.put("/:id/products/:id_product")

router.delete("/:id/products/:id_product")

// TODO ajouter les routes pour les images

// TODO : ajouter les routes pour les descriptions
router.get("/:id/descriptions/")
router.get("/:id/descriptions/:language")

router.post("/:id/descriptions/:language")

router.put("/:id/descriptions/:language")

router.delete("/:id/descriptions/:language")

module.exports = router