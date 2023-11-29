
import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:8081';

let login = async (credentials) => {
    try {
        console.log(credentials.email);
        console.log(credentials.password);
        const response = await Axios.post('/api/users/login', {
            params: {
                email: credentials.email,
                password: credentials.password
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
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
