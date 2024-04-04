import Axios from '@/config';


let getImageById = async (image_id) => {
    try {
        const response = await Axios.get(`/api/images/${image_id}`, { responseType: 'blob' });
        return URL.createObjectURL(response.data);
    } catch(err) {
        throw new Error(err.response.data);
    }
}

export const imagesService = {
    getImageById,
}
