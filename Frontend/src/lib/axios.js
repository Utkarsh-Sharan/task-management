import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:
        import.meta.env.MODE === "development" ?
        "http://localhost:3000/api/v1" :
        "https://task-management-backend-9i5k.onrender.com/api/v1",
})