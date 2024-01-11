const express = require("express")
const usersController = require("../controllers/users.controller")
const usersMiddleware = require("../middlewares/users.middleware")
var router = express.Router()

/*
    TODO : faire en sorte de return le titre du role plutôt que la valeur id_role
    TODO : documentation swagger des routes /:uuid/cart
 */

/**
 * @swagger
 * /api/users/:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users
 *     description: Endpoint for retrieving all users in the system.
 *     responses:
 *       200:
 *         description: A list of users.
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               uuid_user:
 *                 type: string
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               id_role:
 *                 type: integer
 *       404:
 *         description: No user found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/", usersController.getUsers)

// FIXME
router.get("/role/:uuid", usersMiddleware.validateUuid, usersController.getUserRole)

/**
 * @swagger
 * /api/login:
 *   get:
 *     tags:
 *       - Users
 *     summary: User login
 *     description: Endpoint for user authentication.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: login
 *         description: The user's login credentials.
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *               format: email
 *               description: User's email address.
 *             password:
 *               type: string
 *               description: User's password.
 *     responses:
 *       200:
 *         description: Authentication successful, returns user UUID.
 *         schema:
 *           type: object
 *           properties:
 *             uuid_user:
 *               type: string
 *               description: The UUID of the corresponding user.
 *       400:
 *         description: Invalid format for email or password.
 *       401:
 *         description: Invalid email or login.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/login", usersMiddleware.validateLoginInput, usersController.verifyLogin)

/**
 * @swagger
 * /api/users/{uuid}/cart:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user's cart
 *     description: Endpoint for retrieving the cart of a specified user.
 *     parameters:
 *       - name: uuid
 *         in: path
 *         required: true
 *         description: The UUID of the user whose cart is to be retrieved.
 *         type: string
 *     responses:
 *       200:
 *         description: Cart retrieved successfully.
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *               product:
 *                 type: object
 *                 properties:
 *                   id_product:
 *                     type: integer
 *                   price:
 *                     type: number
 *                     format: decimal
 *                   id_stand:
 *                     type: integer
 *                   name_en:
 *                     type: string
 *                   name_fr:
 *                     type: string
 *       404:
 *         description: User not found or Cart is empty.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/:uuid/cart", usersController.getCart)

/**
 * @swagger
 * /api/users/{uuid}/tickets:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user's tickets
 *     description: Endpoint for retrieving all tickets associated with a specified user.
 *     parameters:
 *       - name: uuid
 *         in: path
 *         required: true
 *         description: The UUID of the user whose tickets are to be retrieved.
 *         type: string
 *     responses:
 *       200:
 *         description: A list of tickets associated with the user.
 *       404:
 *         description: User not found or No tickets found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/:uuid/tickets", usersController.getTicketsByUserId)

/**
 * @swagger
 * /api/users/{uuid}/orders:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user's orders
 *     description: Endpoint for retrieving a user's orders.
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: The UUID of the user to retrieve.
 *         type: string
 *     responses:
 *       200:
 *         description: List of orders retrieved successfully.
 *       404:
 *         description: No orders or user found.
 *       500:
 *         description: Internal Server Error
 */
router.get("/:uuid/orders", usersMiddleware.validateUuid, usersController.getOrders)

/**
 * @swagger
 * /api/users/{uuid}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get a user by UUID
 *     description: Endpoint for retrieving details of a specific user.
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: The UUID of the user to retrieve.
 *         type: string
 *     responses:
 *       200:
 *         description: User details retrieved successfully.
 *         schema:
 *           type: object
 *           properties:
 *             uuid_user:
 *               type: string
 *             first_name:
 *               type: string
 *             last_name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             id_role:
 *               type: integer
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal Server Error
 */
router.get("/:uuid", usersMiddleware.validateUuid, usersController.getUserByID)

/**
 * @swagger
 * /api/users/:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a new user
 *     description: Endpoint for creating a new user in the system.
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create.
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             first_name:
 *               type: string
 *             last_name:
 *               type: string
 *     responses:
 *       201:
 *         description: New user saved successfully.
 *       409:
 *         description: Duplicate email. User not saved.
 *       500:
 *         description: Internal Server Error
 */
router.post("/", usersMiddleware.validateUserInput, usersController.saveUser)

/**
 * @swagger
 * /api/users/{uuid}/cart:
 *   post:
 *     tags:
 *       - Users
 *     summary: Add a product to the user's cart
 *     description: Endpoint for adding a product to the user's cart.
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: The UUID of the user.
 *         type: string
 *       - in: body
 *         name: product
 *         required: true
 *         description: The product to add to the cart.
 *         schema:
 *           type: object
 *           properties:
 *             id_product:
 *               type: integer
 *             quantity:
 *               type: integer
 *     responses:
 *       201:
 *         description: Product added to cart successfully.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal Server Error
 */
router.post("/:uuid/cart", usersMiddleware.validateUuid, usersController.addToCart)

/**
 * @swagger
 * /api/users/{uuid}/orders:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create an order based on the user's cart
 *     description: Endpoint for creating an order based on the user's cart.
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: The UUID of the user.
 *         type: string
 *     responses:
 *       201:
 *         description: Order created based on the cart successfully.
 *       500:
 *         description: Internal Server Error
 */
router.post("/:uuid/orders", usersMiddleware.validateUuid, usersController.saveOrder)

/**
 * @swagger
 * /api/users/{uuid}:
 *   put:
 *     tags:
 *       - Users
 *     summary: Update a user by UUID
 *     description: Endpoint for updating a user's details.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: The UUID of the user to update.
 *         type: string
 *       - in: body
 *         name: user
 *         description: The user data to update.
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *             - first_name
 *             - last_name
 *           properties:
 *             email:
 *               type: string
 *               format: email
 *             password:
 *               type: string
 *             first_name:
 *               type: string
 *             last_name:
 *               type: string
 *     responses:
 *       200:
 *         description: User updated successfully.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal Server Error
 */
router.put("/:uuid", usersMiddleware.validateUuid, usersMiddleware.validateUserInput, usersController.updateUserById)

/**
 * @swagger
 * /api/users/{uuid}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete a user by UUID
 *     description: Deletes a user with the specified UUID. This endpoint is part of the users management module.
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: The UUID of the user to delete.
 *         type: string
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: User deleted successfully
 *       400:
 *         description: Invalid format for UUID.
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               example: Invalid format for uuid
 *       404:
 *         description: User not found.
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               example: User not found
 *       500:
 *         description: Internal Server Error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               example: Internal Server Error
 */
router.delete("/:uuid", usersMiddleware.validateUuid, usersController.deleteUserById)

/**
 * @swagger
 * /api/users/{uuid}/cart:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Clear the user's cart
 *     description: Endpoint for clearing the user's cart.
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: The UUID of the user.
 *         type: string
 *     responses:
 *       200:
 *         description: Cart cleared successfully.
 *       500:
 *         description: Internal Server Error
 */
router.delete("/:uuid/cart", usersMiddleware.validateUuid, usersController.clearCart)

/**
 * @swagger
 * /api/users/{uuid}/cart/{id_product}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete a product from the user's cart
 *     description: Endpoint for deleting a product from the user's cart.
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         description: The UUID of the user.
 *         type: string
 *       - in: path
 *         name: id_product
 *         required: true
 *         description: The ID of the product to delete.
 *         type: integer
 *     responses:
 *       200:
 *         description: Product deleted from cart successfully.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal Server Error
 */
router.delete("/:uuid/cart/:id_product", usersMiddleware.validateUuid, usersMiddleware.validateProductId, usersController.deleteItemFromCart)


module.exports = router
