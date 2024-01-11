import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:8081';

import {lang_fr} from "@/datas/lang_fr";
import {lang_en} from "@/datas/lang_en";

export default Axios;
export * from './users.service';
export * from './events.service';
export * from './locations.service';
export * from './providers.service';
export * from './stands.service';
export * from './products.service';
export * from './carts.service';

export {lang_fr};
export {lang_en};