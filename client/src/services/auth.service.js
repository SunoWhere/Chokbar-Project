import Axios from '@/config';
import {usersService} from "@/services/users.service";
const crypto = require('crypto');

let login = async (credentials) => {
    try {
        const res = await Axios.post('/api/users/login', {
            email: credentials.email,
            password: credentials.password
        });
        return res.data;
    } catch (error) {
        throw new Error(error.response.data);
    }
};

let getUuid = () => {
    return localStorage.getItem('uuid');
}

let logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('uuid');
};

let getRole = async () => {
    try {
        const user = await usersService.getUserById(getUuid());
        if(getUuid() && user) {
            const res = await Axios.get('/api/users/' + getUuid() + '/role');
            return res.data;
        } else {
            return undefined;
        }
    } catch (error) {
        removeUuid();
    }
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

export const authService = {
    login,
    logout,
    hashPassword,
    getUuid,
    removeUuid,
    saveUuid,
    getRole,
    removeRole
}
