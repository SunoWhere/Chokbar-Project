import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:8081';

let getAllProvider = async () => {
    try {
        return await Axios.get('/api/providers/');
    } catch (error) {
        throw new Error(error.response.data);
    }
}

let addProvider = async (credentials) => {
    try {
        return await Axios.post('/api/providers/', {
            name: credentials.name,
            uuid_user: credentials.id,
            description_fr: credentials.description_fr,
            description_en: credentials.description_en
        });
    } catch (error) {
        throw new Error(error.response.data);
    }
}

let removeProvider = async (id) => {
    try {
        const route = '/api/providers/' + id;
        return await Axios.delete(route);
    } catch (error) {
        throw new Error(error.response.data);
    }
}

let editProvider = async (credentials) => {
    try {
        const route = '/api/providers/' + credentials.id;
        return await Axios.put(route, {
            id: credentials.id,
            name: credentials.name,
            uuid_user: credentials.uuid_user,
            description_fr: credentials.description_fr,
            description_en: credentials.description_en
        });
    } catch (error) {
        throw new Error(error.response.data);
    }
}

let getProviderById = async (id) => {
    try {
        const res = await Axios.get('/api/providers/' + id);
        return res.data;
    } catch(error) {
        throw new Error(error.response.data);
    }
}

export const providersService = {
    getAllProvider,
    getProviderById,
    addProvider,
    removeProvider,
    editProvider,
}
