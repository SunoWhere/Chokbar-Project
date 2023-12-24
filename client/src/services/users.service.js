import Axios from 'axios';
const crypto = require('crypto');

Axios.defaults.baseURL = 'http://localhost:8081';

let login = async (credentials) => {
    try {
        return await Axios.post('/api/users/login', {
            email: credentials.email,
            password: credentials.password
        });
    } catch (error) {
        throw new Error(error.response.data);
    }
};

let getUuid = () => {
    return localStorage.getItem('uuid');
}

let reciveRole = async () => {
    try {
        return await Axios.get('/api/users/role/' + getUuid());
    } catch (error) {
        throw new Error(error.response.data);
    }
}

let adduser = async (credentials) => {
    try {
        return await Axios.post('/api/users/', {
            email: credentials.email,
            password: hashPassword(credentials.password),
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

let saveRole = (role) => {
    localStorage.setItem('role', role);
};

let getRole = () => {
    return localStorage.getItem('role');
}

let removeRole = () => {
    localStorage.removeItem('role');
}

let saveUuid = (uuid) => {
    localStorage.setItem('uuid', uuid);
}

let removeUuid = () => {
    localStorage.removeItem('uuid');
}

let hashPassword = (password) => {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex'); // return hashed password
}

export const usersService = {
    login,
    getUuid,
    saveUuid,
    removeUuid,
    saveRole,
    reciveRole,
    getRole,
    removeRole,
    getAllUser,
    hashPassword,
    adduser
}