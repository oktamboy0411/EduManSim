import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", // JSON serverning bazaviy URL manzili
  timeout: 1000, // So'rovlar uchun maksimal vaqt
});

export default instance;
