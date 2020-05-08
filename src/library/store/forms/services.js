
import { SERVICE_URL } from 'library/config';

export const services = {

    getAll: {
        method: 'get',
        url: `${SERVICE_URL}/todo`
    },
    add: {
        method: 'post',
        url: `${SERVICE_URL}/todo`,
        headers: {
            'Content-Type': 'application/json'
        }
    },
    edit: {
        method: 'post',
        url: `${SERVICE_URL}/todo`,
        headers: {
            'Content-Type': 'application/json'
        }
    },
    delete: {
        method: 'DELETE',
        url: `${SERVICE_URL}/todo`,
        headers: {
            'Content-Type': 'application/json'
        }
    }

};

export default services;
