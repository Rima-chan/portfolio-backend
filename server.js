require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 5500;
const messageCtrl = require('./controllers/messageCtrl');
const projectCtrl = require('./controllers/projectCtrl');
const domains = process.env.CORS_DOMAIN;
const whitelist = domains?.split(',');
const limiter = rateLimit({
  windowMs: 1000,
  max: 10
});

const app = express();

mongoose.connect(process.env.DB_MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error));

app.use(helmet());
app.use(limiter);
app.use(cors());
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (whitelist.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));

app.use(express.json());
app.use(express.urlencoded());

app.post('/contact', messageCtrl.createNewMessage);
app.get('/projects', projectCtrl.getAllProjects);

app.listen(port, () => console.log(`App listening on port ${port}`));