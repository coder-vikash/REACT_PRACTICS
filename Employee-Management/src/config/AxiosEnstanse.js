import axios from "axios";

const instance = axios.create({
  baseURL: "https://6a23ca3c420469ff067a8595.mockapi.io/",
  timeout: 5000,
  headers: {
    "X-Custom-Header": "foobar",
  },
});

export default instance;
