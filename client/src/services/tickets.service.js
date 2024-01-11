import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:8081';

let createTickets = async (id_ticket_type, email) => {
    try {
        const res = await Axios.post('/api/tickets', {
            id_ticket_type: id_ticket_type,
            email: email
        });
        return res.data;
    } catch(err) {
        throw new Error(err.response.data);
    }
}

let getTicketsTypes = async () => {
    try {
        const res = await Axios.get('/api/tickets/ticket_types');
        return res.data;
    } catch(err) {
        throw new Error(err.response.data);
    }
}

export const ticketsService = {
    createTickets,
    getTicketsTypes,
}