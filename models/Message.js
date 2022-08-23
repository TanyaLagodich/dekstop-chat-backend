import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const MessageSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId, 
    ref: 'User',
  },
  chatId: {
    type: Schema.Types.ObjectId, 
    ref: 'Chat',
  },
  text: {
    type: String,
    required: true,
  },
  read: Boolean,
  attachments: String, // TODO
}, {
  timestamps: true,
});

const MessageModel = model('Message', MessageSchema);
export default MessageModel;