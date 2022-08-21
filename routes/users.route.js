import { Router } from "express";
import UserController from "../controllers/users.controller.js";

const usersRouter = Router();

const UserCntrl = new UserController();

usersRouter.post('/sign-up', UserCntrl.createUser);
usersRouter.post('/login', UserCntrl.login);

export default usersRouter;