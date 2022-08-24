import ChatModel from "../models/Chat.js";
import MessageModel from './../models/Message.js';

class ChatController {

  async getChatById(req, res) {
    const _id = req.params.id;
    const chat = await ChatModel.find({ _id }).populate('members');
    res.json(chat);
  }

  async create(req, res) {
    const { members, text } = req.body;
    const chat = new ChatModel({ members });
    try {

      const isChatExist = await ChatModel.find({ members });
      if (isChatExist.length) {
        res.status(422); // TODO status 
        res.json({message: 'Chat is exist'});
      } else {
        await chat.save();
        const message = await MessageModel({ chatId: chat.id, text });
        message.save();
        chat.lastMessage = message;
        await chat.save();
        await chat.populate('members');
        res.json(chat);
      }
    } catch (err) {
      console.log({err});
      res.json(err)
    }
  }

  async getUserChats(req, res) {
    const { user } = req.user;

    const chatsForUser = await ChatModel.find({ members: user._id }).populate('members');
    res.json(chatsForUser);
  }

  async delete(req, res) {
    try {
      const result = await ChatModel.deleteOne({ _id: req.params.id });
      res.json(result);
    } catch (err) {
      console.log({err})
      res.json(err);
    }
  }
}

export default ChatController;