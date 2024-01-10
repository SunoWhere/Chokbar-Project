const ticketsServices = require("../services/tickets.services")

exports.updateTicketById = async (req, res) => {
    try {
        const affectedRow = await ticketsServices.updateTicketById(req.params.id, req.body.id_ticket_type)
        return res.status(200).send("Ticket updated successfully")
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
};
exports.saveTicket = async (req, res) => {
    try {
        const id_ticket = await ticketsServices.saveTicket(
            req.body.id_ticket_type,
            req.body.email
        )
        return res.status(201).send(id_ticket.toString())
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
};
exports.getTicketById = async (req, res) => {
    try {
        const ticket = await ticketsServices.getTicketById(req.params.id)
        if (!ticket)
            return res.status(404).send("Ticket not found.")
        else
            return res.status(200).send(ticket)
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
};
exports.getTicketTypes = async (req, res) => {
    try {
        const ticketTypes = await ticketsServices.getTicketTypes()
        if (ticketTypes.length === 0)
            return res.status(404).send("No ticket type found.")
        else
            return res.status(200).send(ticketTypes)
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
};
exports.getTickets = async (req, res) => {
    try {
        const tickets = await ticketsServices.getTickets()
        if (tickets.length === 0)
            return res.status(404).send("No tickets found.")
        else
            return res.status(200).send(tickets)
    } catch (err) {
        return res.status(err.errorCode || 500).send(err.message)
    }
};
