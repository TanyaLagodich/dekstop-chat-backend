import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: String,
    password: {
        type: String,
    },
});

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
