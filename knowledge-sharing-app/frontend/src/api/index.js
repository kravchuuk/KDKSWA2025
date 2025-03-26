// frontend/src/api/index.js

import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/";

const token = localStorage.getItem("token");

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export const fetchPosts = async () => {
  const response = await api.get("posts/");
  return response.data;
};

export const createPost = async (formData) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(`${API_BASE_URL}posts/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
