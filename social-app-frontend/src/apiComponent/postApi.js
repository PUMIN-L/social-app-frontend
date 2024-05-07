

import axios from './axios.config'


export const getAllPost = async () => {
    return  await axios.get('/posts')
}

export const getPosrById = async (id) => {
    return await axios.get(`/posts/${id}`)
}

export const deletePost = async (id) => {
    return await axios.delete(`/posts/${id}`)
}

export const createPost = async (data) => {
    return await axios.post("/post",data)
}

export const updatePost = async (id, data) => {
    return await axios.patch(`/post/${id}`, data)
}
