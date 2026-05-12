import { Router } from "express";

const router = Router();

router.route("/").get(getAllTasks);
router.route("/create-task").post(createTask);
router.route("/update-task").put(updateTask);
router.route("/delete-task").delete(deleteTask);

export default router;