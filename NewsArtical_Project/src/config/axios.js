import axios from "axios";
const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeOut: 5000,
});

export default api;
