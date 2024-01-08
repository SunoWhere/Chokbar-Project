import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:8081';

let getEvents = async () => {
    try {
        return await Axios.get('/api/events');
    } catch(err) {
        throw new Error(err.response.data);
    }
}

let getEventById = async (id) => {
    try {
        return await Axios.get(`/api/events/${id}`);
    } catch(err) {
        throw new Error(err.response.data);
    }
}



export const eventsService = {
    getEvents,
    getEventById,
}
