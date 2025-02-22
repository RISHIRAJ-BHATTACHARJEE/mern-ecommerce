import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL+"/products"

export const createProduct = async (product) => {
    const response = await axios.post(`${API_URL}/create`, product)
    return response.data;
}

export const getAllProducts = async () => {
    const response = await axios.get(`${API_URL}/bulk`)
    return response.data;
}

export const getProduct = async (productId) => {
    const response = await axios.get(`${API_URL}/${productId}`)
    return response.data;
}

export const updateProduct = async (productId, product) => {
    const response = await axios.put(`${API_URL}/${productId}`, product)
    return response.data;
}

export const deleteProduct = async (productId) => {
    const response = await axios.delete(`${API_URL}/${productId}`)
    return response.data;
}