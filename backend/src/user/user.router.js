import express from "express";
import userController from "./user.controller";

export const userRouter = express.Router();
userRouter
  .route("/")
  .post(userController.create)
  .get(userController.get)
  .delete(userController.delete)
  .put(userController.update);
