import Axios from '@/config';

let getTotalUsers = async () => {
    try {
        const res = await Axios.get('/api/stats/total-users');
        return res.data;
    } catch(error) {
        throw new Error(error.response.data);
    }
}

let getTotalProviders = async () => {
    try {
        const res = await Axios.get('/api/stats/total-providers');
        return res.data;
    } catch(error) {
        throw new Error(error.response.data);
    }
}

let getTotalProductsSales = async () => {
    try {
        const res = await Axios.get('/api/stats/products-sales');
        return res.data;
    } catch(error) {
        throw new Error(error.response.data);
    }
}

let getTicketSales = async () => {
    try {
        const res = await Axios.get('/api/stats/tickets-sales');
        return res.data;
    } catch(error) {
        throw new Error(error.response.data);
    }
}


export const statsService = {
    getTotalUsers,
    getTotalProviders,
    getTotalProductsSales,
    getTicketSales
}