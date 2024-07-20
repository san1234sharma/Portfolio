import express from "express";
import {login, logout, getUser,myProfile,contact, updateuser, addtimeline, addyoutube, addprojects, deletetimeline, deleteyoutube, deleteproject } from "../controller/User.js";
import { isAuthenticated} from "../middlewares/auth.js";

export const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/User").get(getUser);
userRouter.route("/me").get(isAuthenticated,myProfile);
userRouter.route("/admin/update").put(isAuthenticated,updateuser);
userRouter.route("/admin/timeline/add").post(isAuthenticated,addtimeline);
userRouter.route("/admin/youtube/add").post(isAuthenticated,addyoutube);
userRouter.route("/admin/project/add").post(isAuthenticated,addprojects);
userRouter.route("/admin/timeline/:id").delete(isAuthenticated,deletetimeline);
userRouter.route("/admin/youtube/:id").delete(isAuthenticated,deleteyoutube);
userRouter.route("/admin/project/:id").delete(isAuthenticated,deleteproject);
userRouter.route("/contact").post(contact);