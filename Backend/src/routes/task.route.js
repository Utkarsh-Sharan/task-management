import { Router } from "express";
import { 
    createTask,
    getAllTasks,
    toggleTaskCompletion,
    updateTask,
    deleteTask
} from "../controllers/task.controller.js";
import { verifyTask } from "../middlewares/task.middleware.js";
import { validate } from "../middlewares/validator.middleware.js";
import { titleValidator } from "../validators/index.js";

const router = Router();

router.route("/").get(getAllTasks);
router.route("/").post(titleValidator(), validate, createTask);
router.route("/").put(titleValidator(), validate, verifyTask, updateTask);
router.route("/").patch(verifyTask, toggleTaskCompletion);
router.route("/").delete(verifyTask, deleteTask);

export default router;