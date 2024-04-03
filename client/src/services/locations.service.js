import Axios from '@/config';

let getLocations = async () => {
    try {
        return await Axios.get('/api/locations');
    } catch(err) {
        throw new Error(err.response.data);
    }
}

let getLocationById = async (id) => {
    try {
        return await Axios.get(`/api/locations/${id}`);
    } catch(err) {
        throw new Error(err.response.data);
    }
}

export const locationsService = {
    getLocations,
    getLocationById,
}
