import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL+"/products"

export const createProduct = async (product) => {
    const response = await axios.post(`${API_URL}/create`, product)
}

export const getAllProducts = async () => {
    const response = await axios.get(`${API_URL}/bulk`)
}

export const getProduct = async (productId) => {
    const response = await axios.get(`${API_URL}/${productId}`)
}

export const updateProduct = async (productId, product) => {
    const response = await axios.put(`${API_URL}/${productId}`, product)
}

export const deleteProduct = async (productId) => {
    const response = await axios.delete(`${API_URL}/${productId}`)
}