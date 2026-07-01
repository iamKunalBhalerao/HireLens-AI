import express, { type Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { globalErrorHandler } from "./common/errors/global.error";

const app: Express = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("Hello from the HireLens-AI server!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is healthy and running.",
  });
});

// Route imports
import authRouter from "./modules/auth/auth.routes";
import analysisRouter from "./modules/analysis/analysis.routes";
import userRouter from "./modules/user/user.routes";

// Route declarations
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/analysis", analysisRouter);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
