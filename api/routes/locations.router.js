const express = require("express")
const locationsController = require("../controllers/locations.controller")
const locationsMiddleware = require("..//middlewares/locations.middleware")
var router = express.Router()

/**
 * @swagger
 * /api/locations:
 *   get:
 *     tags:
 *       - Locations
 *     summary: Get all locations
 *     description: Endpoint for retrieving all locations.
 *     responses:
 *       200:
 *         description: A list of locations.
 *       404:
 *         description: No locations found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/", locationsController.getLocations)

/**
 * @swagger
 * /api/locations/{id}/events:
 *   get:
 *     tags:
 *       - Locations
 *     summary: Get events for a specific location
 *     description: Endpoint for retrieving all events associated with a specified location.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the location.
 *         type: integer
 *     responses:
 *       200:
 *         description: A location object with the list of events.
 *       400:
 *         description: Invalid format for location id
 *       404:
 *         description: Location not found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/:id/events", locationsMiddleware.validateLocationId, locationsController.getLocationEvents)

/**
 * @swagger
 * /api/locations/{id}:
 *   get:
 *     tags:
 *       - Locations
 *     summary: Get a specific location by ID
 *     description: Endpoint for retrieving details of a specific location.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the location.
 *         type: integer
 *     responses:
 *       200:
 *         description: Location details retrieved successfully.
 *       400:
 *         description: Invalid format for location id
 *       404:
 *         description: Location not found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/:id", locationsMiddleware.validateLocationId, locationsController.getLocationById)

module.exports = router