import axios from "axios";

const instance = axios.create({
  baseURL: "https://marketmanagebe-production.up.railway.app",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // withCredentials: true,
});

export default instance;
