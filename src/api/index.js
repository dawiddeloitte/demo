import { get, getPaginated } from "./api";

const getPostsEndpoint = '/posts';
const getPostEndpoint = (id) => `/posts/${id}`;


export const getPosts = () => {
    return get(getPostsEndpoint);
}

export const getPost = (id) => {
    return get(getPostEndpoint(id));
}

export const getPostsInfinite = ( page = 1, contentPerPage) => {
    return getPaginated(getPostsEndpoint, {_page: page, _limit: contentPerPage}, page);
} 