import Axios from '@/config';

import {authService} from "@/services";

let reciveRole = async () => {
    try {
        const res = await Axios.get('/api/users/' + authService.getUuid() + '/role/');
        return res.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
}

let addUser = async (credentials) => {
    try {
        return await Axios.post('/api/users/', {
            email: credentials.email,
            password: authService.hashPassword(credentials.password),
            first_name: credentials.first_name,
            last_name: credentials.last_name
        });
    } catch (error) {
        throw new Error(error.response.data);
    }
}

let getAllUser = async () => {
    try {
        return await Axios.get('/api/users/');
    } catch (error) {
        throw new Error(error.response.data);
    }
}

let getUserById = async (id) => {
    try {
        const res = await Axios.get('/api/users/' + id);
        return res.data;
    } catch(error) {
        throw new Error(error.response.data);
    }
}

let removeUser = async (id) => {
    try {
        const route = '/api/users/' + id;
        return await Axios.delete(route);
    } catch (error) {
        throw new Error(error.response.data);
    }
}

let editUser = async (credentials) => {
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

let createOrder = async (uuid_user) => {
    try {
        const route = '/api/users/' + uuid_user + '/orders';
        return await Axios.post(route);
    } catch (error) {
        console.error(error);
    }
}

let getOrders = async (uuid_user) => {
    try {
        const route = '/api/users/' + uuid_user + '/orders';
        const res = await Axios.get(route);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

let getAllOrderStates = async () => {

}

let getRegisteredEvents = async (uuid_user) => {
    try {
        const route = `/api/users/${uuid_user}/events`;

        return await Axios.get(route);
    } catch (error) {
        console.error(error);
    }
}

export const usersService = {
    reciveRole,
    getAllUser,
    addUser,
    removeUser,
    createOrder,
    getOrders,
    editUser,
    getUserById,
    getAllOrderStates,
    getRegisteredEvents
}
