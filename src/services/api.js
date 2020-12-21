import axios from "axios";
import Auth from "./auth";

const api = axios.create({
  baseURL: "http://localhost:3000"
});

api.interceptors.request.use(async config => {
  const token = Auth.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;