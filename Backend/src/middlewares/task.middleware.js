import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";
import { Task } from "../models/task.model.js";
import mongoose from "mongoose";

export const verifyTask = asyncHandler(async (req, res, next) => {
    const {taskId} = req.body;

    if(!mongoose.Types.ObjectId.isValid(taskId))
        throw new ApiError(400, "Invalid task ID!");

    const task = await Task.findById(taskId);
    if(!task) throw new ApiError(404, "Task not found!");

    req.task = task;
    next();
});