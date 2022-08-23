import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const DialogSchema = new Schema({
  author: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',
   },
  partner: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',
   },
  lastMessage: { 
    type: Schema.Types.ObjectId, 
    ref: 'Message',
   },
}, {
  timestamps: true,
});

const DialogModel = model('Dialog', DialogSchema);
export default DialogModel;