import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://6a23ca3c420469ff067a8595.mockapi.io",
  responseType: "json",
  timeout: 50000, // safer timeout
});

export default axiosInstance;
