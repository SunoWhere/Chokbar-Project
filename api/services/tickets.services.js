const CustomError = require("../utils/CustomError");
const TicketsModel = require("../database/DB.connection").DB_models.tickets
const TicketTypesModel = require("../database/DB.connection").DB_models.ticket_types
const UserModel = require("../database/DB.connection").DB_models.users

exports.validateTicketByHash = async (hash) => {
    try {
        const ticket = await TicketsModel.findOne({
            where: {hash: hash}
        })
        if (!ticket)
            throw new CustomError("Ticket not found", 404)

        const ticketType = await TicketTypesModel.findByPk(ticket.id_ticket_type)
        if (!ticketType)
            throw new CustomError("Ticket type not found", 404)

        let result = ticket.toJSON()
        result.expired = false

        const currentDate = new Date()
        if (ticket.validated_at === null) {
            ticket.update({validated_at: currentDate.toISOString()})
        } else {
            const validationDate = new Date(ticket.validated_at)
            const dayDifference = (currentDate.getTime() - validationDate.getTime()) / (1000 * 3600 * 24)
            if (dayDifference >= ticketType.duration)
                result.expired = true
        }

        return result
    } catch (err) {
        console.log(err)
        throw err
    }
};
exports.updateTicketById = async (id, id_ticket_type) => {
    try {
        const ticket = await TicketsModel.findOne({where: {id_ticket: id}})
        if (!ticket)
            throw new CustomError("Ticket not found.", 404)

        const ticketType = await TicketTypesModel.findOne({where: {id_ticket_type: id_ticket_type}})
        if (!ticketType)
            throw new CustomError("Ticket type not found.", 404)

        ticket.update({id_ticket_type: id_ticket_type})

    } catch (err) {
        console.log(err)
        throw err
    }
};
exports.saveTicket = async (id_ticket_type, email) => {
    try {
        const ticketType = await TicketTypesModel.findOne({where: {id_ticket_type: id_ticket_type}})
        if (!ticketType)
            throw new CustomError("Ticket type not found.", 404)

        const alphanum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
        let hash = ''
        for (let i = 0; i < 256; i++) {
            hash += alphanum.charAt(Math.floor(Math.random() * alphanum.length));
        }

        const user = await UserModel.findOne({where: {email: email}})

        // TODO à finir
        const ticket = await TicketsModel.create({
            hash: hash,
            email: email,
            id_ticket_type: id_ticket_type,
            uuid_user: (user && user.uuid_user) ? user.uuid_user : null
        })
        return ticket.id_ticket
    } catch (err) {
        console.log(err)
        throw err
    }
};
exports.getTicketById = async (id) => {
    try {
        const ticket = await TicketsModel.findOne({
            where: {id_ticket: id},
            include:
                {
                    model: TicketTypesModel,
                    as: 'id_ticket_type_ticket_type',
                    attributes: ['name', 'duration']
                }
        })
        ticket.dataValues.ticket_type = ticket.dataValues.id_ticket_type_ticket_type
        delete ticket.dataValues.id_ticket_type_ticket_type
        return ticket
    } catch (err) {
        console.log(err)
        throw err
    }
};
exports.getTicketTypes = async () => {
    try {
        return await TicketTypesModel.findAll()
    } catch (err) {
        console.log(err)
        throw err
    }
};
exports.getTickets = async () => {
    try {
        const tickets = await TicketsModel.findAll({
            include:
                {
                    model: TicketTypesModel,
                    as: 'id_ticket_type_ticket_type',
                    attributes: ['name', 'duration']
                }
        })
        tickets.forEach(ticket => {
            ticket.dataValues.ticket_type = ticket.dataValues.id_ticket_type_ticket_type
            delete ticket.dataValues.id_ticket_type_ticket_type
        })
        return tickets
    } catch (err) {
        console.log(err)
        throw err
    }
};
