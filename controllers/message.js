import MessageModel from './../models/Message.js';
import DialogModel from "../models/Chat.js";

class MessageContoller {

  async index (req, res) {
    const dialogId = req.params.dialogId;
    const messages = await MessageModel.find({ dialog: dialogId }).populate('dialog');
    res.json(messages);
  }

  async create (req, res) {
    const { dialog, text, messageTo, messageFrom } = req.body;

    try {
    if (!dialog) {
      const newDialog = new DialogModel({ members: [messageTo, messageFrom] });
      dialog = await newDialog.save();
      console.log(dialog);
    }

    const newMessage = new MessageModel({ dialog, text, messageTo, messageFrom });
      const result = await newMessage.save();
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

}

export default MessageContoller;