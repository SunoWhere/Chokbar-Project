const express = require("express")
const statsController = require("../controllers/stats.controller")
var router = express.Router()

/**
 * @swagger
 * /api/stats/total-users:
 *   get:
 *     tags:
 *       - Stats
 *     summary: Get total number of users
 *     description: Endpoint for retrieving the total number of users with the role 'user'.
 *     responses:
 *       200:
 *         description: The total number of users.
 *         schema:
 *           type: object
 *           properties:
 *             users_total:
 *               type: string
 *               description: The total number of users in the database with the role 'user'.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/total-users", statsController.getTotalUsers)

/**
 * @swagger
 * /api/stats/total-providers:
 *   get:
 *     tags:
 *       - Stats
 *     summary: Get total number of providers
 *     description: Endpoint for retrieving the total number of providers.
 *     responses:
 *       200:
 *         description: The total number of providers.
 *         schema:
 *           type: object
 *           properties:
 *             providers_total:
 *               type: string
 *               description: The total number of providers in the database.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/total-providers", statsController.getTotalProviders)

/**
 * @swagger
 * /api/stats/total-products:
 *   get:
 *     tags:
 *       - Stats
 *     summary: Get total number of products
 *     description: Endpoint for retrieving the total number of products.
 *     responses:
 *       200:
 *         description: The total number of products.
 *         schema:
 *           type: object
 *           properties:
 *             products_total:
 *               type: string
 *               description: The total number of products in the database.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/total-products", statsController.getTotalProducts)

/**
 * @swagger
 * /api/stats/tickets-sales:
 *   get:
 *     tags:
 *       - Stats
 *     summary: Get ticket sales statistics
 *     description: Endpoint for retrieving ticket sales statistics, grouped by ticket types.
 *     responses:
 *       200:
 *         description: Ticket sales statistics.
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_ticket_type:
 *                 type: integer
 *                 description: The ID of the ticket type.
 *               name:
 *                 type: string
 *                 description: Name of the ticket type.
 *               tickets_total:
 *                 type: integer
 *                 description: Total number of tickets sold for this type.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/tickets-sales", statsController.getTicketsSales)

/**
 * @swagger
 * /api/stats/products-sales:
 *   get:
 *     tags:
 *       - Stats
 *     summary: Get product sales statistics
 *     description: Endpoint for retrieving product sales statistics, grouped by stands.
 *     responses:
 *       200:
 *         description: Product sales statistics.
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_stand:
 *                 type: integer
 *                 description: The ID of the stand.
 *               name:
 *                 type: string
 *                 description: Name of the stand.
 *               sales_total:
 *                 type: number
 *                 format: float
 *                 description: Total sales amount for the stand's products.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/products-sales", statsController.getProductsSales)

module.exports = router