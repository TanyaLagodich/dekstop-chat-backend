import { Router } from "express";
import UserController from "../controllers/user.js";
import authenticateJWT from '../middleware/authenticateJWT.js';

const usersRouter = Router();

const UserCntrl = new UserController();

usersRouter.get('/profile', authenticateJWT, UserCntrl.profile);
usersRouter.post('/sign-up', UserCntrl.createUser);
usersRouter.post('/login', UserCntrl.login);

export default usersRouter;