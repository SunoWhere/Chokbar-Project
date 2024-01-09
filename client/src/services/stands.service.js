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

let editProviderStand = async (standDetails) => {
    try {
        return await Axios.put("/api/providers/", standDetails);
    } catch (error) {
        console.error(error);
    }
}

export const standsService = {
    getProviderStands,
    editProviderStand
}