import {create} from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useTaskStore = create((set, get) => ({
    tasks: [],
    renderTasks: false,

    getAllTasks: async () => {
        try {
            const res = await axiosInstance.get("/task/");
            
            set({tasks: res.data.data.tasks});
        } catch (error) {
            
        }
    },

    createTask: async (data) => {
        try {
            const res = await axiosInstance.post("/task/", data);
            console.log(res);

            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
            const backend = error.response?.data;
            const message =
                (backend?.errors && Object.values(backend.errors)[0]) ||
                backend?.message ||
                "Something went wrong!";

            toast.error(message);
        }
    },
}))