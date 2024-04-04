import Axios from '@/config';

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
    } catch (err) {
        throw new Error(err.response.data);
    }
}

let editEvent = async (eventToEdit, id) => {
    try {
        return await Axios.put(`/api/events/${id}`, {
            name: eventToEdit.name,
            max_capacity: eventToEdit.max_capacity,
            starting_time: eventToEdit.starting_time,
            finishing_time: eventToEdit.finishing_time,
            description_en: eventToEdit.description_en,
            description_fr: eventToEdit.description_fr,
            id_location: eventToEdit.id_location
        });
    } catch(err) {
        throw new Error(err.response.data);
    }
}

let deleteEvent = async (id) => {
    try {
        return await Axios.delete(`/api/events/${id}`);
    } catch(err) {
        throw new Error(err.response.data);
    }
}

let registerToEvent = async (id_event, uuid_user) => {
    try {
        return await Axios.post(`/api/events/${id_event}/register`, {
            uuid_user: uuid_user
        });
    } catch(err) {
        throw new Error(err.response.data);
    }
}

let unregisterToEvent = async (id_event, uuid_user) => {
    try {
        console.log(uuid_user)
        return await Axios.delete(`/api/events/${id_event}/unregister`, {
            data: {
                uuid_user: uuid_user
            }
        });
    } catch(err) {
        throw new Error(err.response.data);
    }
}


export const eventsService = {
    getEvents,
    getEventById,
    addEvent,
    editEvent,
    deleteEvent,
    registerToEvent,
    unregisterToEvent
}
