const express = require("express")
const providersController = require("../controllers/providers.controller")
const providersMiddleware = require("../middlewares/providers.middleware")
var router = express.Router()

router.get("/", providersController.getProviders)
router.get("/:id", providersMiddleware.validateId, providersController.getProviderById)

router.post("/", providersMiddleware.validateProviderInput, providersController.saveProvider)

router.put("/:id", providersMiddleware.validateId, providersMiddleware.validateProviderInput, providersController.updateProviderById)

router.delete("/:id", providersMiddleware.validateId, providersController.deleteProviderById)

// TODO ajouter les routers pour les images

module.exports = router