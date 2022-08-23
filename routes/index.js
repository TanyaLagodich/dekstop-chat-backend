import { Router } from "express";
import usersRouter from './user.js';
import dialogRouter from "./dialog.js";

const router = Router();
router.use('/users', usersRouter);
router.use('/dialogs', dialogRouter);

export default router;