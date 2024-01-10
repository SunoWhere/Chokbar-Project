const TicketsModel = require("../database/DB.connection").DB_models.tickets
const TicketTypesModel = require("../database/DB.connection").DB_models.ticket_types

exports.getTicketById = async (id) => {
    try {
        return await TicketsModel.findOne({where: {id_ticket: id}})
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
        return await TicketsModel.findAll()
    } catch (err) {
        console.log(err)
        throw err
    }
};
