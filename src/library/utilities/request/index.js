
import axios from 'axios';
import { SERVICE_URL } from 'library/config';

const instance = axios.create({
    baseURL: SERVICE_URL,
    timeout: 1000,
    withCredentials: false
});

export const requested = (config) => {

    return instance(config)
        .then((response) => response)
        .catch((error) => {
            console.error(error);
        });

};

export default requested;
