const express = require("express")
const standsController = require("../controllers/stands.controller")
const standsMiddleware = require("../middlewares/stands.middleware")
var router = express.Router()

// ---- General ----
router.get("/", standsController.getStands)

router.get("/:id", standsMiddleware.validateId, standsController.getStandById)

router.post("/", standsMiddleware.validateStandInput, standsController.saveStand)

router.put("/:id", standsMiddleware.validateId, standsMiddleware.validateStandInput, standsController.updateStandById)

router.delete("/:id",standsMiddleware.validateId, standsController.deleteStandById)

// ---- Products ----
router.get("/:id/products/", standsMiddleware.validateId, standsController.getProductsByStandId)

router.get("/:id/products/:id_product",standsMiddleware.validateId, standsMiddleware.validateProductId, standsController.getProductsByIdByStandId)

router.post("/:id/products/", standsMiddleware.validateId, standsController.saveProduct)

router.put("/:id/products/:id_product", standsMiddleware.validateId, standsMiddleware.validateProductId, standsController.updateProductById)

router.delete("/:id/products/:id_product",  standsMiddleware.validateId, standsController.deleteProductById)

// ---- Images ----
router.post("/:id/images", standsMiddleware.validateId, standsController.addStandImage)

// ---- Orders ----
router.get("/:id/orders")

router.get("/:id/orders/:id_order")

module.exports = router