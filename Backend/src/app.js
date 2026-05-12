import express from "express";
import cors from "cors";

const app = express();

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-type", "Authorization"],
    })
);

//Routes
import taskRouter from "./routes/task.route.js";

app.use("/api/v1/task", taskRouter);

export default app;