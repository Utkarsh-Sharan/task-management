import { Router } from "express";
import { 
    createTask,
    getAllTasks,
    toggleTaskCompletion,
    updateTask,
    deleteTask
} from "../controllers/task.controller.js";

const router = Router();

router.route("/").get(getAllTasks);
router.route("/").post(createTask);
router.route("/").put(updateTask);
router.route("/").patch(toggleTaskCompletion);
router.route("/").delete(deleteTask);

export default router;