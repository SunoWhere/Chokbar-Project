const express = require("express")
const productsController = require("../controllers/products.controller")
const productsMiddleware = require("../middlewares/products.middleware")
var router = express.Router()

/**
 * @swagger
 * /api/product_types/:
 *   get:
 *     tags:
 *       - Products
 *     summary: Get all product types
 *     description: Endpoint for retrieving all available product types.
 *     responses:
 *       200:
 *         description: A list of product types.
 *       404:
 *         description: No product types found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/product_types/", productsController.getProductTypes)

/**
 * @swagger
 * /api/products/{id_product}:
 *   get:
 *     tags:
 *       - Products
 *     summary: Get a specific product by ID
 *     description: Endpoint for retrieving the details of a specific product.
 *     parameters:
 *       - name: id_product
 *         in: path
 *         required: true
 *         description: The ID of the product.
 *         type: integer
 *     responses:
 *       200:
 *         description: Product details retrieved successfully.
 *       400:
 *         description: Invalid format for ID product.
 *       404:
 *         description: No product found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/:id_product", productsMiddleware.validateProductId, productsController.getProductById)

/**
 * @swagger
 * /api/products:
 *   post:
 *     tags:
 *       - Products
 *     summary: Create a new product
 *     description: Endpoint for creating a new product.
 *     consumes:
 *       - application/json
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
 *       500:
 *         description: Internal Server Error.
 */
router.post("/", productsController.saveProduct)

/**
 * @swagger
 * /api/products/{id_product}:
 *   put:
 *     tags:
 *       - Products
 *     summary: Update a specific product by ID
 *     description: Endpoint for updating the details of a specific product.
 *     parameters:
 *       - name: id_product
 *         in: path
 *         required: true
 *         description: The ID of the product to update.
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
 *         description: Invalid format for ID product.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal Server Error.
 */
router.put("/:id_product", productsMiddleware.validateProductId, productsController.updateProductById)

/**
 * @swagger
 * /api/products/{id_product}:
 *   delete:
 *     tags:
 *       - Products
 *     summary: Delete a specific product by ID
 *     description: Endpoint for deleting a specific product.
 *     parameters:
 *       - name: id_product
 *         in: path
 *         required: true
 *         description: The ID of the product to delete.
 *         type: integer
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *       400:
 *         description: Invalid format for ID product.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal Server Error.
 */
router.delete("/:id_product", productsMiddleware.validateProductId, productsController.deleteProductById)

module.exports = router