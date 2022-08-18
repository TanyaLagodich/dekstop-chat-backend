import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: String,
    password: String,
});

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
