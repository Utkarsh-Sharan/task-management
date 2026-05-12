import { Router } from "express";
import { 
    createTask,
    getAllTasks,
    toggleTaskCompletion,
    updateTask,
    deleteTask
} from "../controllers/task.controller.js";
import { verifyTask } from "../middlewares/task.middleware.js";

const router = Router();

router.route("/").get(getAllTasks);
router.route("/").post(createTask);
router.route("/").put(verifyTask, updateTask);
router.route("/").patch(verifyTask, toggleTaskCompletion);
router.route("/").delete(verifyTask, deleteTask);

export default router;