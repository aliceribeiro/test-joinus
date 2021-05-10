import axios from "axios";

const api = axios.create({
  baseURL: "https://p3teufi0k9.execute-api.us-east-1.amazonaws.com",
  timeout: 5000,
});

export default api;
