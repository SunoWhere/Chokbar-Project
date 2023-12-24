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

router.get("/:id/products/", standsMiddleware.validateId, standsController.getProductsByStandId)
router.get("/:id/products/:id_product",standsMiddleware.validateId, standsMiddleware.validateProductId, standsController.getProductsByIdByStandId)

router.post("/:id/products/")
router.put("/:id/products/:id_product")

router.delete("/:id/products/:id_product")

// TODO ajouter les routers pour les images

module.exports = router