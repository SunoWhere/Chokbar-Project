import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8081";

let getProviderStands = async () => {
    try {
        const stands = await Axios.get("/api/providers/");
        return stands.data;
    } catch (error) {
        console.error(error);
    }
}

let editProviderStand = async (standDetails) => {
    try {
        const stand = await Axios.put("/api/stands/", standDetails);
        return stand.data;
    } catch (error) {
        console.error(error);
    }
}

export const providerService = {
    getProviderStands,
    editProviderStand
}