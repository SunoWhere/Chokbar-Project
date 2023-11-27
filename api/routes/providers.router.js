const express = require("express")
const providersController = require("../controllers/providers.controller")
const providersMiddleware = require("../middlewares/providers.middleware")
var router = express.Router()

router.get("/", providersController.getProviders)
router.get("/:id", providersMiddleware.validateId, providersController.getProviderById)

router.post("/", providersMiddleware.validateProviderInput, providersController.saveProvider)

router.put("/:id", providersMiddleware.validateId, providersMiddleware.validateProviderInput, providersController.updateProviderById)

router.delete("/:id", providersMiddleware.validateId, providersController.deleteProviderById)

// TODO : rajouter les routes pour gérer les produits et article
router.get("/:id/")
router.get("/:id/products/")
router.get("/:id/products/:id_product")

router.post("/:id/products/")
router.put("/:id/products/:id_product")

router.delete("/:id/products/:id_product")

module.exports = router