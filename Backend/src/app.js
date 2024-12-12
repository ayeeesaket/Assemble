import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({
    limit: "16kb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

app.use(cookieParser());

// HEALTH CHECK ROUTE
import healthRouter from "./routes/healthcheck.routes.js";
app.use("/api/v1", healthRouter);

//user route import
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter)

export default app;