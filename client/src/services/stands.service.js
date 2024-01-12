import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8081";

let getUuid = () => {
    return localStorage.getItem('uuid');
}

let getProvider = async () => {
    try {
        const response = await Axios.get('/api/providers/')
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

let getAllStands = async () => {
    try {
        const stands = await Axios.get("/api/stands/");
        return stands.data;
    } catch (error) {
        console.error(error);
    }
}

let getStandById = async (id) => {
    try {
        const res = await Axios.get('/api/stands/' + id);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

let editProviderStand = async (stand) => {
    try {
        const route = '/api/stands/' + stand.id_stand; // Assuming id_stand is the unique identifier
        const response = await Axios.put(route, {
            name: stand.name,
            description_fr: stand.description_fr,
            description_en: stand.description_en,
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error(error.response.data);
    }
}

let addStand = async (stand) => {
    try {
        const route = '/api/stands';
        const response = await Axios.post(route, {
            id_location: stand.id_location,
            id_provider: stand.id_provider,
            id_stand_type: stand.id_stand_type,
            name: stand.name,
            description_en: stand.description_en,
            description_fr: stand.description_fr
        });
        return response.data;
    } catch(error) {
        console.error(error);
    }
}

let removeStand = async (id) => {
    try {
        const route = '/api/stands/' + id;
        return await Axios.delete(route);
    } catch (error) {
        throw new Error(error.response.data);
    }
}

let getStandProduct = async (id) => {
    try {
        const route = '/api/stands/' + id + '/products/';
        const res = await Axios.get(route);
        return res.data;
    } catch(error) {
        console.error(error);
    }
}

let getAllLocations = async () => {
    try {
        const route = '/api/locations';
        const res = await Axios.get(route);
        return res.data;
    } catch(error) {
        console.error(error);
    }
}

export const standsService = {
    getProvider,
    editProviderStand,
    getStandById,
    removeStand,
    getUuid,
    getAllStands,
    getStandProduct,
    addStand,
    getAllLocations
}