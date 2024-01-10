const express = require("express")
const providersController = require("../controllers/providers.controller")
const providersMiddleware = require("../middlewares/providers.middleware")
var router = express.Router()

// TODO : ajouter l'attribution du stands à la création et modification du provider

/**
 * @swagger
 * /api/providers/:
 *   get:
 *     tags:
 *       - Providers
 *     summary: Get all providers
 *     description: Endpoint for retrieving a list of all providers.
 *     responses:
 *       200:
 *         description: List of providers retrieved successfully.
 *       404:
 *         description: No providers found.
 *       500:
 *         description: Internal server error.
 */
router.get("/", providersController.getProviders)

/**
 * @swagger
 * /api/providers/{id}:
 *   get:
 *     tags:
 *       - Providers
 *     summary: Get provider by ID
 *     description: Endpoint for retrieving a provider by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Provider ID
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Provider retrieved successfully.
 *       404:
 *         description: Provider not found.
 *       500:
 *         description: Internal server error.
 */
router.get("/:id", providersMiddleware.validateId, providersController.getProviderById)

/**
 * @swagger
 * /api/providers/:
 *   post:
 *     tags:
 *       - Providers
 *     summary: Create a new provider
 *     description: Endpoint for creating a new provider in the system.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: provider
 *         description: Provider information to be created.
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - uuid_user
 *           properties:
 *             name:
 *               type: string
 *               description: Name of the provider.
 *             uuid_user:
 *               type: string
 *               description: UUID of the user associated with the provider.
 *             description_fr:
 *               type: string
 *               description: French description of the provider.
 *             description_en:
 *               type: string
 *               description: English description of the provider.
 *     responses:
 *       200:
 *         description: The provider created object.
 *       400:
 *         description: Invalid input format.
 *       404:
 *         description: User not found.
 *       409:
 *         description: Duplicate provider on one user.
 *       500:
 *         description: Internal Server Error
 */
router.post("/", providersMiddleware.validateProviderInput, providersController.saveProvider)

/**
 * @swagger
 * /api/providers/{id}/validate-order/{id_order}:
 *   post:
 *     tags:
 *       - Providers
 *     summary: Validate an order
 *     description: Endpoint for validating an order.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Provider ID
 *         required: true
 *         type: integer
 *       - name: id_order
 *         in: path
 *         description: Order ID
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Order validated successfully.
 *       400:
 *         description: Invalid format for id or id_order.
 *       404:
 *         description: Provider or order not found.
 *       500:
 *         description: Internal server error.
 */
router.post("/:id/validate-order/:id_order", providersMiddleware.validateId, providersMiddleware.validateOrderId, providersController.validateOrder)

/**
 * @swagger
 * /api/providers/{id}/complete-order/{hash}:
 *   post:
 *     tags:
 *       - Providers
 *     summary: Complete an order
 *     description: Endpoint for completing an order.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Provider ID
 *         required: true
 *         type: integer
 *       - name: hash
 *         in: path
 *         description: Order hash
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Order completed successfully.
 *       400:
 *         description: Invalid format for id or hash.
 *       404:
 *         description: Provider or order not found.
 *       500:
 *         description: Internal server error.
 */
router.post("/:id/complete-order/:hash", providersMiddleware.validateId, providersMiddleware.validateHash, providersController.completeOrder)

/**
 * @swagger
 * /api/providers/{id}/image:
 *   post:
 *     tags:
 *       - Providers
 *     summary: Save an image for a provider
 *     description: Endpoint for saving an image for a provider.
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Provider ID
 *         required: true
 *         type: integer
 *       - name: image
 *         in: formData
 *         description: Image to be uploaded.
 *         required: true
 *         type: file
 *     responses:
 *       200:
 *         description: Image saved successfully.
 *       400:
 *         description: Invalid format for id.
 *       404:
 *         description: Provider not found.
 *       500:
 *         description: Internal server error.
 */
router.post("/:id/image", providersController.saveImageByProviderId)

/**
 * @swagger
 * /api/providers/{id}:
 *   put:
 *     tags:
 *       - Providers
 *     summary: Update a provider
 *     description: Endpoint for updating a provider in the system.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Provider ID
 *         required: true
 *         type: integer
 *       - in: body
 *         name: provider
 *         description: Provider information to be updated.
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - uuid_user
 *           properties:
 *             name:
 *               type: string
 *               description: Name of the provider.
 *             uuid_user:
 *               type: string
 *               description: UUID of the user associated with the provider.
 *             description_fr:
 *               type: string
 *               description: French description of the provider.
 *             description_en:
 *               type: string
 *               description: English description of the provider.
 *     responses:
 *       200:
 *         description: Provider updated successfully.
 *       400:
 *         description: Invalid input format.
 *       404:
 *         description: Provider not found.
 *       500:
 *         description: Internal Server Error
 */
router.put("/:id", providersMiddleware.validateId, providersMiddleware.validateProviderInput, providersController.updateProviderById)

/**
 * @swagger
 * /api/providers/{id}:
 *   delete:
 *     tags:
 *       - Providers
 *     summary: Delete a provider by ID
 *     description: Endpoint for deleting a provider using its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the provider to delete.
 *         type: integer
 *     responses:
 *       200:
 *         description: Provider deleted successfully.
 *       400:
 *         description: Invalid format for ID.
 *       404:
 *         description: Provider not found.
 *       500:
 *         description: Internal Server Error or could not update the user's role.
 */
router.delete("/:id", providersMiddleware.validateId, providersController.deleteProviderById)

/**
 * @swagger
 * /api/providers/{id_provider}/image/{id_image}:
 *   delete:
 *     tags:
 *       - Providers
 *     summary: Delete a specific image for a provider
 *     description: Endpoint for deleting a specific image associated with a provider.
 *     parameters:
 *       - name: id_provider
 *         in: path
 *         required: true
 *         description: The ID of the provider.
 *         type: integer
 *       - name: id_image
 *         in: path
 *         required: true
 *         description: The ID of the image to delete.
 *         type: integer
 *     responses:
 *       200:
 *         description: Provider image deleted successfully.
 *       404:
 *         description: Provider not found, Image not found, or Provider image not found.
 *       500:
 *         description: Internal Server Error.
 */
router.delete("/:id_provider/image/:id_image", providersController.deleteImageByProviderId)


module.exports = router