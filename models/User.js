import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import validateEmail from '../utils/validateEmail.js';


const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: [validateEmail, 'Please fill a valid email address'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    avatar: String,
    confirmed: {
        type: Boolean,
        default: false,
    }, // ?
    confirm_hash: String, // ?
    last_seen: Date,
}, {
    timestamps: true,
});

const UserModel = model('User', UserSchema);
export default UserModel;
