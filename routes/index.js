import { Router } from "express";
import usersRouter from './user.js';
import chatRouter from "./chat.js";
import messageRouter from "./message.js";

const router = Router();
router.use('/users', usersRouter);
router.use('/chats', chatRouter);
router.use('/chats/:id/messages', messageRouter);

export default router;