import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ChatSchema = new Schema({
  members: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User',
   }],
  lastMessage: { 
    type: Schema.Types.ObjectId, 
    ref: 'Message',
   },
}, {
  timestamps: true,
});

const ChatModel = model('Dialog', ChatSchema);
export default ChatModel;