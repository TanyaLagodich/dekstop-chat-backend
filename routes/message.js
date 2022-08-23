import { Router } from "express";
import MessageContoller from "../controllers/message.js";

const messageRouter = Router();

const MessageCntrl = new MessageContoller();

messageRouter.get('/', MessageCntrl.index);
messageRouter.post('/', MessageCntrl.create);

export default messageRouter;