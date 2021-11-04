require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const port = process.env.PORT || 5500;
const messageCtrl = require('./controllers/messageCtrl');

const app = express();

const whitelist = process.env.CORS_DOMAIN;

const limiter = rateLimit({
  windowMs: 1000,
  max: 1
});

mongoose.connect(process.env.DB_MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error));

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
app.use(limiter);

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (whitelist.indexOf(origin) !== -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

app.post('/contact', messageCtrl.createNewMessage);

app.listen(port, () => console.log(`App listening on port ${port}`));