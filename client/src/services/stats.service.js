import Axios from '@/config';

let getTotalUsers = async () => {
    try {
        const res = await Axios.get("/api/stats/total-users");
        return res.data;
    } catch (error) {
        console.error(error);
    }
}
let getTicketSales = async () => {
    try {
        const res = await Axios.get("/api/stats/tickets-sales");
        return res.data;
    } catch (error) {
        console.error(error);
    }
}
let getTotalProviders = async () => {
    try {
        const res = await Axios.get("/api/stats/total-providers");
        return res.data;
    } catch (error) {
        console.error(error);
    }
}
let getTotalProductsSales = async () => {
    try {
        const res = await Axios.get("/api/stats/total-products");
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export const statsService = {
    getTotalUsers,
    getTicketSales,
    getTotalProviders,
    getTotalProductsSales
}
