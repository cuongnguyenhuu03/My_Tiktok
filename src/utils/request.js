import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, option = {}) => {
    const respone = await request.get(path, option);
    return respone.data;
};

export default request;
