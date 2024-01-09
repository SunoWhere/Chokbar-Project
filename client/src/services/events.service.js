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

let getLocations = async () => {
    try {
        return await Axios.get('/api/locations');
    } catch(err) {
        throw new Error(err.response.data);
    }
}

let addEvent = async (eventToAdd) => {
    try {
        return await Axios.post('/api/events/', {
            name: eventToAdd.name,
            max_capacity: eventToAdd.max_capacity,
            starting_time: eventToAdd.starting_time,
            finishing_time: eventToAdd.finishing_time,
            description_en: eventToAdd.description_en,
            description_fr: eventToAdd.description_fr,
            id_location: eventToAdd.id_location
        });
    } catch (error) {
        throw new Error(error.response.data);
    }
}



export const eventsService = {
    getEvents,
    getEventById,
    getLocations,
    addEvent,
}
