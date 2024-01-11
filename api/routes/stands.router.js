const express = require("express")
const standsController = require("../controllers/stands.controller")
const standsMiddleware = require("../middlewares/stands.middleware")
const imagesMiddleware = require("../middlewares/images.middleware")
var router = express.Router()

// ---- General ----

/**
 * @swagger
 * /api/stands:
 *   get:
 *     tags:
 *       - Stands
 *     summary: Get all stands
 *     description: Endpoint for retrieving all stands.
 *     responses:
 *       200:
 *         description: A list of stands.
 *       404:
 *         description: No stands found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/", standsController.getStands)

/**
 * @swagger
 * /api/stands/{id}:
 *   get:
 *     tags:
 *       - Stands
 *     summary: Get stand by id
 *     description: Endpoint for retrieving stand by id.
 *     responses:
 *       200:
 *         description: Stand details retrieved successfully.
 *       400:
 *         description: Invalid format for id
 *       404:
 *         description: No stands found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/:id", standsMiddleware.validateId, standsController.getStandById)

/**
 * @swagger
 * /api/stands:
 *   post:
 *     tags:
 *       - Stands
 *     summary: Create a new stand
 *     description: Endpoint for creating a new stand.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: stand
 *         description: Stand information to be created.
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - id_location
 *             - id_provider
 *             - id_stand_type
 *             - name
 *             - description_en
 *             - description_fr
 *           properties:
 *             id_location:
 *               type: integer
 *               description: Location ID of the stand.
 *             id_provider:
 *               type: integer
 *               description: Provider ID associated with the stand.
 *             id_stand_type:
 *               type: integer
 *               description: Stand type ID.
 *             name:
 *               type: string
 *               description: Name of the stand.
 *             description_en:
 *               type: string
 *               description: English description of the stand.
 *             description_fr:
 *               type: string
 *               description: French description of the stand.
 *     responses:
 *       200:
 *         description: New stand saved successfully.
 *       400:
 *         description: Invalid input format.
 *       500:
 *         description: Internal Server Error.
 */
router.post("/", standsMiddleware.validateStandInput, standsController.saveStand)

/**
 * @swagger
 * /api/stands/{id}:
 *   put:
 *     tags:
 *       - Stands
 *     summary: Update a stand by ID
 *     description: Endpoint for updating the details of a specific stand.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the stand to update.
 *         type: integer
 *       - in: body
 *         name: stand
 *         description: Stand information to be updated.
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - id_location
 *             - id_provider
 *             - id_stand_type
 *             - name
 *             - description_en
 *             - description_fr
 *           properties:
 *             id_location:
 *               type: integer
 *               description: Location ID of the stand.
 *             id_provider:
 *               type: integer
 *               description: Provider ID associated with the stand.
 *             id_stand_type:
 *               type: integer
 *               description: Stand type ID.
 *             name:
 *               type: string
 *               description: Name of the stand.
 *             description_en:
 *               type: string
 *               description: English description of the stand.
 *             description_fr:
 *               type: string
 *               description: French description of the stand.
 *     responses:
 *       200:
 *         description: Stand updated successfully.
 *       400:
 *         description: Invalid input format.
 *       404:
 *         description: Stand not found.
 *       500:
 *         description: Internal Server Error.
 */
router.put("/:id", standsMiddleware.validateId, standsMiddleware.validateStandInput, standsController.updateStandById)

/**
 * @swagger
 * /api/stands/{id}:
 *   delete:
 *     tags:
 *       - Stands
 *     summary: Delete a stand by ID
 *     description: Endpoint for deleting a specific stand.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the stand to delete.
 *         type: integer
 *     responses:
 *       200:
 *         description: Stand deleted successfully.
 *       400:
 *         description: Invalid format for ID.
 *       404:
 *         description: Stand not found.
 *       500:
 *         description: Internal Server Error.
 */
router.delete("/:id", standsMiddleware.validateId, standsController.deleteStandById)

// ---- Products ----
/**
 * @swagger
 * /api/stands/{id}/products/:
 *   get:
 *     tags:
 *       - Stands
 *     summary: Get products by stand ID
 *     description: Endpoint for retrieving all products associated with a specific stand.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the stand.
 *         type: integer
 *     responses:
 *       200:
 *         description: List of products associated with the stand.
 *       400:
 *         description: Invalid format for ID.
 *       404:
 *         description: No product found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/:id/products/", standsMiddleware.validateId, standsController.getProductsByStandId)

/**
 * @swagger
 * /api/stands/{id}/products/{id_product}:
 *   get:
 *     tags:
 *       - Stands
 *     summary: Get specific product by product ID and stand ID
 *     description: Endpoint for retrieving a specific product associated with a given stand.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the stand.
 *         type: integer
 *       - name: id_product
 *         in: path
 *         required: true
 *         description: The ID of the product.
 *         type: integer
 *     responses:
 *       200:
 *         description: Product details.
 *       400:
 *         description: Invalid format for ID or ID Product.
 *       404:
 *         description: No product found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/:id/products/:id_product", standsMiddleware.validateId, standsMiddleware.validateProductId, standsController.getProductsByIdByStandId)

/**
 * @swagger
 * /api/stands/{id}/products/:
 *   post:
 *     tags:
 *       - Stands
 *     summary: Add a new product to a stand
 *     description: Endpoint for adding a new product to the specified stand.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the stand.
 *         type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - price
 *               - quantity
 *               - id_stand
 *               - id_product_type
 *               - description_en
 *               - description_fr
 *               - name_en
 *               - name_fr
 *             properties:
 *               price:
 *                 type: number
 *                 format: double
 *                 description: Price of the product.
 *               quantity:
 *                 type: integer
 *                 description: Quantity available.
 *               id_stand:
 *                 type: integer
 *                 description: Stand ID the product is associated with.
 *               id_product_type:
 *                 type: integer
 *                 description: Product type ID.
 *               description_en:
 *                 type: string
 *                 description: English description of the product.
 *               description_fr:
 *                 type: string
 *                 description: French description of the product.
 *               name_en:
 *                 type: string
 *                 description: English name of the product.
 *               name_fr:
 *                 type: string
 *                 description: French name of the product.
 *     responses:
 *       200:
 *         description: New product saved successfully.
 *       400:
 *         description: Invalid format for ID.
 *       500:
 *         description: Internal Server Error.
 */
router.post("/:id/products/", standsMiddleware.validateId, standsController.saveProduct)

/**
 * @swagger
 * /api/stands/{id}/products/{id_product}:
 *   put:
 *     tags:
 *       - Stands
 *     summary: Update a specific product by product ID and stand ID
 *     description: Endpoint for updating a specific product associated with a given stand.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the stand.
 *         type: integer
 *       - name: id_product
 *         in: path
 *         required: true
 *         description: The ID of the product.
 *         type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - price
 *               - quantity
 *               - id_stand
 *               - id_product_type
 *               - description_en
 *               - description_fr
 *               - name_en
 *               - name_fr
 *             properties:
 *               price:
 *                 type: number
 *                 format: double
 *                 description: Price of the product.
 *               quantity:
 *                 type: integer
 *                 description: Quantity available.
 *               id_stand:
 *                 type: integer
 *                 description: Stand ID the product is associated with.
 *               id_product_type:
 *                 type: integer
 *                 description: Product type ID.
 *               description_en:
 *                 type: string
 *                 description: English description of the product.
 *               description_fr:
 *                 type: string
 *                 description: French description of the product.
 *               name_en:
 *                 type: string
 *                 description: English name of the product.
 *               name_fr:
 *                 type: string
 *                 description: French name of the product.
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *       400:
 *         description: Invalid format for ID or ID Product.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal Server Error.
 */
router.put("/:id/products/:id_product", standsMiddleware.validateId, standsMiddleware.validateProductId, standsController.updateProductById)

/**
 * @swagger
 * /api/stands/{id}/products/{id_product}:
 *   delete:
 *     tags:
 *       - Stands
 *     summary: Delete a specific product by product ID
 *     description: Endpoint for deleting a specific product from a stand.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the stand.
 *         type: integer
 *       - name: id_product
 *         in: path
 *         required: true
 *         description: The ID of the product to delete.
 *         type: integer
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *       400:
 *         description: Invalid format for ID.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal Server Error.
 */
router.delete("/:id/products/:id_product", standsMiddleware.validateId, standsController.deleteProductById)

// ---- Images ----
/**
 * @swagger
 * /api/stands/{id}/images:
 *   post:
 *     tags:
 *       - Stands
 *     summary: Add an image to a stand
 *     description: Endpoint for adding a new image to a specified stand.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the stand.
 *         type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Image file to upload.
 *     responses:
 *       200:
 *         description: Successfully added new image to stand.
 *       400:
 *         description: Invalid ID or input format.
 *       500:
 *         description: Internal Server Error.
 */
router.post("/:id/images", standsMiddleware.validateId, imagesMiddleware.validateImage, standsController.addStandImage)

// TODO ---- Orders ----
router.get("/:id/orders")

router.get("/:id/orders/:id_order")

module.exports = router