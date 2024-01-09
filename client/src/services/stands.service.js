import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8081";

let getProviderStands = async () => {
    try {
        const response = await Axios.get("/api/providers");
        return response.data[0].stand_ids;
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

let editProviderStand = async (standDetails) => {
    try {
        return await Axios.put("/api/providers/", standDetails);
    } catch (error) {
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

export const standsService = {
    getProviderStands,
    editProviderStand,
    getStandById,
    removeStand,
}