import { Router } from "express";
import ChatController from "../controllers/chats.js";
import authenticateJWT from '../middleware/authenticateJWT.js';

const chatRouter = Router();

const ChatCntrl = new ChatController();

chatRouter.get('/', authenticateJWT, ChatCntrl.getUserChats);
chatRouter.get('/:id', ChatCntrl.getChatById);
chatRouter.post('/', ChatCntrl.create);
chatRouter.delete('/:id', ChatCntrl.delete);

export default chatRouter;