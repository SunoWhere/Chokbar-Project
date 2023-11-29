import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:8081';

let login = async (credentials) => {
    try {
        console.log(credentials.email);
        console.log(credentials.password);
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

let saveUuid = (uuid) => {
    localStorage.setItem('uuid', uuid);
}

export const usersService = {
    login,
    getUuid,
    saveUuid
}
