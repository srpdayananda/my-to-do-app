import express from "express";
import taskController from "./task.controller";

export const taskRouter = express.Router();
taskRouter
  .route("/")
  .post(taskController.create)
  .get(taskController.get)
  .delete(taskController.delete)
  .put(taskController.update);
