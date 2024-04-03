import Axios from '@/config';

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

let clearCart = async (uuid_user) => {
    try {
        const route = '/api/users/' + uuid_user + '/cart';
        return await Axios.delete(route);
    } catch (error) {
        console.error(error);
    }
}

export const cartsService = {
    addCart,
    getCartByUserId,
    removeCartLine,
    clearCart,
}
