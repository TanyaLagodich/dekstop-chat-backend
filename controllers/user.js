import bcrypt from 'bcrypt';
import generateJWT from '../utils/generateJWT.js';
import UserModel from "../models/User.js";

export default class UserController {

  async createUser(req, res) {
    const { name, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new UserModel({
        name, 
        email, 
        password: hashedPassword,
      });
      const savedUser = await user.save();
      console.log(savedUser);
      res.json(savedUser);
    } catch (err) {
      res.status(409); // TODO check status of error
      res.json(err);
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {

        const { password, ...responseUser } = user._doc;
        res.json({
          user: responseUser,
          token: generateJWT(user),
        });
      } else {
        res.status(401).json({ error: 'Password is incorrect'});
      }
    } else {
      res.status(401).json({ error: 'User doesn\'t found'});
    }
  }

}