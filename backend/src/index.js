import express from "express";
import { userRouter } from "./user";
import { taskRouter } from "./task";

export const restRouter = express.Router();
restRouter.use("/user", userRouter);
restRouter.use("/task", taskRouter);
