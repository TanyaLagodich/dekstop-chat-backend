import { Router } from "express";
import DialogController from "../controllers/dialog.js";

const dialogRouter = Router();

const DialogCntrl = new DialogController();

dialogRouter.get('/', DialogCntrl.index);
dialogRouter.get('/:id', DialogCntrl.show);
dialogRouter.post('/', DialogCntrl.create);
dialogRouter.delete('/:id', DialogCntrl.delete);

export default dialogRouter;