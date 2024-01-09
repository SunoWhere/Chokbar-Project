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
        const route = '/api/users/' + credentials.id;
        return await Axios.put(route, {
            uuid: credentials.id,
            email: credentials.email,
            password: credentials.password,
            first_name: credentials.first_name,
            last_name: credentials.last_name
        });
    } catch (error) {
        throw new Error(error.response.data);
    }
}


export const providersService = {
    getAllProvider,
    addProvider,
    removeProvider,
    editProvider,
}
