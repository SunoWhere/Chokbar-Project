const express = require("express")
const providersController = require("../controllers/providers.controller")
const providersMiddleware = require("../middlewares/providers.middleware")
var router = express.Router()

// TODO : ajouter l'attribution du stands à la création et modification du provider

router.get("/", providersController.getProviders)
router.get("/:id", providersMiddleware.validateId, providersController.getProviderById)

router.post("/", providersMiddleware.validateProviderInput, providersController.saveProvider)
router.post("/:id/image", providersController.saveImageByProviderId)

router.put("/:id", providersMiddleware.validateId, providersMiddleware.validateProviderInput, providersController.updateProviderById)

router.delete("/:id", providersMiddleware.validateId, providersController.deleteProviderById)
router.delete("/:id_provider/image/:id_image", providersController.deleteImageByProviderId)

// TODO ajouter les routes pour les images


module.exports = router