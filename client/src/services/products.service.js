import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:8081';

let getAllProductTypes = async () => {
    try {
        const res = await Axios.get('/api/products/product_types/');
        return res.data;
    } catch(error) {
        throw new Error(error.response.data);
    }
}

let getAllProductStates = async () => {
    try {
        const res = await Axios.get('/api/products/product_states/');
        return res.data;
    } catch(error) {
        throw new Error(error.response.data);
    }
}

export const productsService = {
    getAllProductTypes,
    getAllProductStates
}