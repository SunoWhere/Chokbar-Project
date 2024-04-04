const express = require("express")
const imagesController = require("../controllers/images.controller")
const imagesMiddleware = require("../middlewares/images.middleware")
var router = express.Router()

/**
 * @swagger
 * /api/images:
 *   get:
 *     tags:
 *       - Images
 *     summary: Get all images
 *     description: Endpoint for retrieving all available images.
 *     responses:
 *       200:
 *         description: A list of images.
 *       404:
 *         description: No images found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/", imagesController.getImages)

/**
 * @swagger
 * /api/images/{id}:
 *   get:
 *     tags:
 *       - Images
 *     summary: Get an image by id
 *     description: Endpoint for retrieving a specific image by its id.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The id of the image.
 *         type: string
 *     responses:
 *       200:
 *         description: Image retrieved successfully.
 *       400:
 *         description: Invalid filename.
 *       404:
 *         description: Image not found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/:id", imagesMiddleware.validateFilename, imagesController.getImageById)

/**
 * @swagger
 * /api/images:
 *   post:
 *     tags:
 *       - Images
 *     summary: Add a new image
 *     description: Endpoint for uploading a new image.
 *     consumes:
 *       - in: formData
 *         name: image
 *         type: file
 *         description: The image to upload.
 *         required: true
 *         content: multipart/form-data
 *         schema:
 *           type: object
 *           properties:
 *             image:
 *               type: file
 *               format: binary
 *               description: Image file to upload.
 *     responses:
 *       200:
 *         description: Image added successfully.
 *       400:
 *         description: Invalid format for image.
 *       500:
 *         description: Internal Server Error.
 */
router.post("/", imagesMiddleware.validateImage, imagesController.addImage)

/**
 * @swagger
 * /api/images/{id}:
 *   delete:
 *     tags:
 *       - Images
 *     summary: Delete an image
 *     description: Endpoint for deleting a specific image by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the image to delete.
 *         type: integer
 *     responses:
 *       200:
 *         description: Image deleted successfully.
 *       400:
 *         description: Invalid ID format.
 *       500:
 *         description: Internal Server Error.
 */
router.delete("/:id", imagesMiddleware.validateId, imagesController.deleteImage)

module.exports = router