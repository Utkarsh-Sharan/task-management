import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

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

//Global error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Something went wrong!",
        errors: err.errors || null,
        data: err.data || null,
        ...(process.env.NODE_ENV !== "production" && {stack: err.stack}),
    });
});

export default app;