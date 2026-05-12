import { Task } from "../models/task.model.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";

const getAllTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find();

    return res
        .status(200)
        .json(new ApiResponse(200, {tasks}, "Tasks fetched successfully!"));
});

const createTask = asyncHandler(async (req, res) => {
    const {title} = req.body;

    const task = await Task.create({title});

    const createdTask = await Task.findById(task._id);
    if(!createdTask) throw new ApiError(500, "Something went wrong while creating new task!");

    return res
        .status(201)
        .json(new ApiResponse(201, {createdTask}, "Task created successfully!"));
});

const updateTask = asyncHandler(async (req, res) => {
    const task = req.task;
    const {title} = req.body;

    task.title = title;
    await task.save({validateBeforeSave: false});

    return res
        .status(200)
        .json(new ApiResponse(200, {task}, "Task updated successfully!"));
});

const toggleTaskCompletion = asyncHandler(async (req, res) => {
    const task = req.task;

    task.isCompleted = !task.isCompleted;
    await task.save({validateBeforeSave: false});

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Toggled task completion successfully!"));
});

const deleteTask = asyncHandler(async (req, res) => {
    await Task.findOneAndDelete(req.task._id);

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Task deleted successfully!"));
});

export {
    getAllTasks,
    createTask,
    updateTask,
    toggleTaskCompletion,
    deleteTask,
}