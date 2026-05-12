import {create} from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useTaskStore = create((set, get) => ({
    tasks: [],
    reRenderTasks: false,

    getAllTasks: async () => {
        try {
            const res = await axiosInstance.get("/task/");
            
            set({tasks: res.data.data.tasks});
        } catch (error) {
            const backend = error.response?.data;
            const message =
                (backend?.errors && Object.values(backend.errors)[0]) ||
                backend?.message ||
                "Something went wrong!";

            toast.error(message);
        }
    },

    createTask: async (data) => {
        try {
            const res = await axiosInstance.post("/task/", data);
            
            set({reRenderTasks: !get().reRenderTasks});
            toast.success(res.data.message);
        } catch (error) {
            const backend = error.response?.data;
            const message =
                (backend?.errors && Object.values(backend.errors)[0]) ||
                backend?.message ||
                "Something went wrong!";

            toast.error(message);
        }
    },

    toggleTaskCompletion: async (data) => {
        try {
            await axiosInstance.patch("/task/", data);
        } catch (error) {
            const backend = error.response?.data;
            const message =
                (backend?.errors && Object.values(backend.errors)[0]) ||
                backend?.message ||
                "Something went wrong!";

            toast.error(message);
        }
    },

    updateTask: async (data) => {
        try {
            const res = await axiosInstance.put("/task/", data);

            set({reRenderTasks: !get().reRenderTasks});
            toast.success(res.data.message);
        } catch (error) {
            const backend = error.response?.data;
            const message =
                (backend?.errors && Object.values(backend.errors)[0]) ||
                backend?.message ||
                "Something went wrong!";

            toast.error(message);
        }
    },

    deleteTask: async (data) => {
        try {
            const res = await axiosInstance.delete("/task/", {data});

            set({reRenderTasks: !get().reRenderTasks});
            toast.success(res.data.message);
        } catch (error) {
            const backend = error.response?.data;
            const message =
                (backend?.errors && Object.values(backend.errors)[0]) ||
                backend?.message ||
                "Something went wrong!";

            toast.error(message);
        }
    }
}))