import Express from 'express';
import * as dotenv from 'dotenv';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import router from './routes/index.js';

dotenv.config();

const app = new Express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('DB connection is successfull');
  })
  .catch((err) => {
    console.error(err);
  })


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
