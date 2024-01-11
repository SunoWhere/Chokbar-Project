const express = require("express");
const ticketsController = require("../controllers/tickets.controller")
var router = express.Router()

/**
 * @swagger
 * /api/tickets/:
 *   get:
 *     tags:
 *       - Tickets
 *     summary: Get all tickets
 *     description: Endpoint for retrieving a list of all tickets.
 *     responses:
 *       200:
 *         description: List of tickets retrieved successfully.
 *       404:
 *         description: No tickets found.
 *       500:
 *         description: Internal server error.
 */
router.get("/", ticketsController.getTickets)

/**
 * @swagger
 * /api/tickets/ticket_types:
 *   get:
 *     tags:
 *       - Tickets
 *     summary: Get all ticket types
 *     description: Endpoint for retrieving a list of all ticket types.
 *     responses:
 *       200:
 *         description: List of ticket types retrieved successfully.
 *       404:
 *         description: No ticket types found.
 *       500:
 *         description: Internal server error.
 */
router.get("/ticket_types", ticketsController.getTicketTypes)

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     tags:
 *       - Tickets
 *     summary: Get ticket by ID
 *     description: Endpoint for retrieving a ticket by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Ticket ID
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Ticket retrieved successfully.
 *       404:
 *         description: Ticket not found.
 *       500:
 *         description: Internal server error.
 */
router.get("/:id", ticketsController.getTicketById)

/**
 * @swagger
 * /api/tickets/:
 *   post:
 *     tags:
 *       - Tickets
 *     summary: Create a ticket
 *     description: Endpoint for creating a ticket.
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Ticket information
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_ticket_type:
 *               type: integer
 *             email:
 *               type: string
 *     responses:
 *       201:
 *         description: Ticket created successfully.
 *       500:
 *         description: Internal server error.
 */
router.post("/", ticketsController.saveTicket)

/**
 * @swagger
 * /api/tickets/validate/{hash}:
 *   put:
 *     tags:
 *       - Tickets
 *     summary: Validate a ticket
 *     description: Endpoint for validating a ticket. Return the ticket with its expired state and set the ticket's validated_at field to the current date if not validate yet.
 *     parameters:
 *       - name: hash
 *         in: path
 *         description: Ticket hash
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Ticket validated successfully.
 *       404:
 *         description: Ticket not found.
 *       500:
 *         description: Internal server error.
 */
router.put("/validate/:hash", ticketsController.validateTicketByHash)

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     tags:
 *       - Tickets
 *     summary: Update a ticket
 *     description: Endpoint for updating a ticket.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Ticket ID
 *         required: true
 *         type: integer
 *       - name: body
 *         in: body
 *         description: Ticket information
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_ticket_type:
 *               type: integer
 *     responses:
 *       200:
 *         description: Ticket updated successfully.
 *       404:
 *         description: Ticket not found.
 *       500:
 *         description: Internal server error.
 */
router.put("/:id", ticketsController.updateTicketById)

module.exports = router