import Axios from 'axios';

Axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default Axios;
