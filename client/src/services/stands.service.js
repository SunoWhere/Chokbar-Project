import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8081";

let getUuid = () => {
    return localStorage.getItem('uuid');
}

let getProvider = async () => {
    try {
        const response = await Axios.get('/api/providers/')
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

let getStandById = async (id) => {
    try {
        const res = await Axios.get('/api/stands/' + id);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

let editProviderStand = async (stand) => {
     try {
        const route = '/api/stands/' + stand.stand_ids;
        return await Axios.put(route, {
            stand_ids: stand.stand_ids,
            name: stand.name,
            description_fr: stand.description_fr,
            description_en: stand.description_en,
        });
    } catch (error) {
        throw new Error(error.response.data);
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

export const standsService = {
    getProvider,
    editProviderStand,
    getStandById,
    removeStand,
    getUuid,
}