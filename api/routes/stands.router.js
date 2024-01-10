const express = require("express")
const standsController = require("../controllers/stands.controller")
const standsMiddleware = require("../middlewares/stands.middleware")
var router = express.Router()


// TODO ajouter des lien API vers les images dans la réponse
router.get("/", standsController.getStands)
// TODO ajout get product types
router.get("/product_types/", standsController.getProductTypes)
router.get("/:id", standsMiddleware.validateId, standsController.getStandById)

router.post("/", standsMiddleware.validateStandInput, standsController.saveStand)

router.put("/:id", standsMiddleware.validateId, standsMiddleware.validateStandInput, standsController.updateStandById)

router.delete("/:id",standsMiddleware.validateId, standsController.deleteStandById)

// TODO ajouter une route pour les product type
router.get("/:id/products/", standsMiddleware.validateId, standsController.getProductsByStandId)
router.get("/:id/products/:id_product",standsMiddleware.validateId, standsMiddleware.validateProductId, standsController.getProductsByIdByStandId)

router.post("/:id/products/", standsMiddleware.validateId, standsController.saveProduct)
router.put("/:id/products/:id_product", standsMiddleware.validateId, standsMiddleware.validateProductId, standsController.updateProductById)

router.delete("/:id/products/:id_product",  standsMiddleware.validateId, standsController.deleteProductById)

// TODO : le delete du stands doit changer le state de tout les produits relier

// TODO ajouter les routes pour les images

module.exports = router