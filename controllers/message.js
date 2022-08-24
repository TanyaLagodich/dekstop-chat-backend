import MessageModel from './../models/Message.js';
import DialogModel from "../models/Chat.js";

class MessageContoller {

  async index (req, res) {
    const dialogId = req.params.dialogId;
    const messages = await MessageModel.find({ dialog: dialogId }).populate('dialog');
    res.json(messages);
  }

  async create (req, res) {
    const { chatId, text } = req.body;
    const userId = req.user._id;

    try {
    const newMessage = new MessageModel({ chatId, text, userId });
      const result = await newMessage.save();
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

}

export default MessageContoller;