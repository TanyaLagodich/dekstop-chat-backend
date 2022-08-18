import Express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';

import UserModel from './models/User.js';

const app = new Express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sign-up', (req, res) => {
  const user = new UserModel(req.body);
  console.log(user);
  res.send('it\'s working');
})

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
