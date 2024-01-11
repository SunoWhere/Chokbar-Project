const express = require("express")
const eventsController = require("../controllers/events.controller")
const eventsMiddleware = require("../middlewares/events.middleware")
const imagesMiddleware = require("../middlewares/images.middleware")
var router = express.Router()

/**
 * @swagger
 * /api/events:
 *   get:
 *     tags:
 *       - Events
 *     summary: Get all events
 *     description: Endpoint for retrieving all events.
 *     responses:
 *       200:
 *         description: A list of events.
 *       404:
 *         description: No Events Found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/", eventsController.getEvents)

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     tags:
 *       - Events
 *     summary: Get a specific event by ID
 *     description: Endpoint for retrieving details of a specific event.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the event.
 *         type: integer
 *     responses:
 *       200:
 *         description: Event details retrieved successfully.
 *       400:
 *         description: Invalid format for event ID.
 *       404:
 *         description: No Event Found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/:id", eventsMiddleware.validateEventId, eventsController.getEventByID)

/**
 * @swagger
 * /api/events:
 *   post:
 *     tags:
 *       - Events
 *     summary: Create a new event
 *     description: Endpoint for creating a new event.
 *     consumes:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - max_capacity
 *               - starting_time
 *               - finishing_time
 *               - description_en
 *               - description_fr
 *               - id_location
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the event.
 *               max_capacity:
 *                 type: integer
 *                 description: Maximum capacity of the event.
 *               starting_time:
 *                 type: string
 *                 format: date-time
 *                 description: Starting time of the event.
 *               finishing_time:
 *                 type: string
 *                 format: date-time
 *                 description: Finishing time of the event.
 *               description_en:
 *                 type: string
 *                 description: English description of the event.
 *               description_fr:
 *                 type: string
 *                 description: French description of the event.
 *               id_location:
 *                 type: integer
 *                 description: ID of the event's location.
 *     responses:
 *       200:
 *         description: New event created successfully.
 *       500:
 *         description: Internal Server Error.
 */
router.post("/", eventsController.addEvent)

/**
 * @swagger
 * /api/events/{id}/images:
 *   post:
 *     tags:
 *       - Events
 *     summary: Add an image to an event
 *     description: Endpoint for adding a new image to a specified event.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the event.
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
 *         description: Successfully added new image to event.
 *       400:
 *         description: Invalid format for event ID.
 *       500:
 *         description: Internal Server Error.
 */
router.post("/:id/images", eventsMiddleware.validateEventId, eventsController.addEventImage)

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     tags:
 *       - Events
 *     summary: Update an existing event
 *     description: Endpoint for updating the details of a specified event.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the event to update.
 *         type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - max_capacity
 *               - starting_time
 *               - finishing_time
 *               - description_en
 *               - description_fr
 *               - id_location
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the event.
 *               max_capacity:
 *                 type: integer
 *                 description: Maximum capacity of the event.
 *               starting_time:
 *                 type: string
 *                 format: date-time
 *                 description: Starting time of the event.
 *               finishing_time:
 *                 type: string
 *                 format: date-time
 *                 description: Finishing time of the event.
 *               description_en:
 *                 type: string
 *                 description: English description of the event.
 *               description_fr:
 *                 type: string
 *                 description: French description of the event.
 *               id_location:
 *                 type: integer
 *                 description: ID of the event's location.
 *     responses:
 *       200:
 *         description: Event updated successfully.
 *       400:
 *         description: Invalid format for event ID.
 *       500:
 *         description: Internal Server Error.
 */
router.put("/:id", eventsMiddleware.validateEventId, eventsController.updateEvent)

/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     tags:
 *       - Events
 *     summary: Delete an event by ID
 *     description: Endpoint for deleting a specific event.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the event to delete.
 *         type: integer
 *     responses:
 *       200:
 *         description: Event deleted successfully.
 *       400:
 *         description: Invalid format for event ID.
 *       404:
 *         description: Event not found.
 *       500:
 *         description: Internal Server Error.
 */
router.delete("/:id", eventsMiddleware.validateEventId, eventsController.deleteEvent)

module.exports = router