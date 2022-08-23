import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const MessageSchema = new Schema({
  text: {
    type: String,
    require: true,
  },
  dialog: {
    type: Schema.Types.ObjectId, 
    ref: 'Dialog',
    require: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const MessageModel = model('Message', MessageSchema);
export default MessageModel;