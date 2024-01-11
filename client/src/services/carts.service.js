import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:8081";

let addCart = async (uuid_user, id_product, quantity) => {
    try {
        return await Axios.post('/api/users/' + uuid_user + '/cart', {
            id_product: id_product,
            quantity: quantity
        });
    } catch(error) {
        console.error(error);
    }
}

let getCartByUserId = async (uuid_user) => {
    try {
        const res = await Axios.get('/api/users/' + uuid_user + '/cart');
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

let removeCartLine = async (uuid_user, id_product) => {
    try {
        const route = '/api/users/' + uuid_user + '/cart/' + id_product;
        return await Axios.delete(route);
    } catch (error) {
        throw new Error(error.response.data);
    }
}

export const cartsService = {
    addCart,
    getCartByUserId,
    removeCartLine
}