import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:8081';

export default Axios;
export * from './users.service';
export * from './events.service';
export * from './providers.service';
export * from './stands.service';