import Axios from 'axios';

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

export const usersService = {
    login,
    getUuid,
    saveUuid,
    removeUuid,
    saveRole,
    reciveRole,
    getRole,
    removeRole
}
