import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com' //'add url here';

const apiCall = async (method, endpoint, data = null, params = null) => {
    const url = `${BASE_URL}/${endpoint}`;

    try {
        const response = await axios({
            method,
            url,
            data,
            params,
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return response.data;
    } catch (error) {
        console.error('API ERROR: ', error);
        throw error;
    }
}

export const get = async (endpoint) => {
    return apiCall('get', endpoint);
}

export const getPaginated = async (endpoint, params, page) => {
    return apiCall('get', endpoint, null, params).then(res => {
        const hasNext = page * parseInt(params.contentPerPage) <= parseInt(res.headers["x-total-count"])
        return {
            nextPage: hasNext ? page + 1 : undefined,
            previousPage: page > 1 ? page-- : undefined,
            data: res.data,
        }
    })
}

export const post = async (endpoint, data) => {
    return apiCall('post', endpoint, data);
}