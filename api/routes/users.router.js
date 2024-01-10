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
 *     description: Endpoint for retrieving a list of all users.
 *     responses:
 *       200:
 *         description: List of users retrieved successfully.
 *       404:
 *         description: No users found.
 *       500:
 *         description: Internal Server Error
 */
router.get("/", usersController.getUsers)
router.post("/login", usersMiddleware.validateLoginInput, usersController.verifyLogin)
router.get("/role/:uuid", usersMiddleware.validateUuid, usersController.getUserRole)

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     tags:
 *       - Users
 *     summary: User login
 *     description: Endpoint for user login. Authenticates the user and returns the user UUID if successful.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The credentials required for user login.
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *               format: email
 *               description: User's email address. Must be a valid email format.
 *             password:
 *               type: string
 *               description: User's password. The string format and length requirements depend on the system's password policy.
 *     responses:
 *       200:
 *         description: Login successful. Returns the UUID of the authenticated user.
 *         schema:
 *           type: object
 *           properties:
 *             uuid_user:
 *               type: string
 *               description: The UUID of the logged-in user.
 *       401:
 *         description: Unauthorized. Invalid credentials.
 *       500:
 *         description: Internal Server Error
 */
router.get("/login", usersMiddleware.validateLoginInput, usersController.verifyLogin)

router.get("/:uuid/cart", usersController.getCart)

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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: New user saved successfully.
 *       409:
 *         description: Duplicate email. User not saved.
 *       500:
 *         description: Internal Server Error
 */
router.post("/", usersMiddleware.validateUserInput, usersController.saveUser)

router.post("/:uuid/cart", usersMiddleware.validateUuid, usersController.addToCart)

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
router.delete("/:uuid/cart", usersMiddleware.validateUuid, usersController.clearCart)
router.delete("/:uuid/cart/:id_product", usersMiddleware.validateUuid, usersMiddleware.validateProductId, usersController.deleteItemFromCart)


module.exports = router
