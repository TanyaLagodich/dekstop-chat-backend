import Express from 'express';
import cors from 'cors';
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
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', router);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
