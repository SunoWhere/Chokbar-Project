const express = require("express");
const ticketsController = require("../controllers/tickets.controller")
var router = express.Router()

// get all tickets
router.get("/", ticketsController.getTickets)
// get all ticket types
router.get("/ticket_types", ticketsController.getTicketTypes)
// get ticket information by ID
router.get("/:id", ticketsController.getTicketById)

router.post("/", ticketsController.saveTicket)

router.put("/validate/:hash", ticketsController.validateTicketByHash)
router.put("/:id", ticketsController.updateTicketById)

module.exports = router