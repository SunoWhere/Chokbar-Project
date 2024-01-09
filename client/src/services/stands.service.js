import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8081";

let getProviderStands = async () => {
    try {
        return await Axios.get("/api/stands/");
    } catch (error) {
        console.error(error);
    }
}

let editProviderStand = async (standDetails) => {
    try {
        const stand = "/api/stands/" + standDetails.id_stand;
        return await Axios.put(stand, {
            name: standDetails.name
        });
    } catch (error) {
        console.error(error);
    }
}

export const standsService = {
    getProviderStands,
    editProviderStand
}