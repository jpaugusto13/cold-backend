const express = require('express');
const cors = require('cors');

const db = require('../db/db');
const app = express();

const initialRoute = require('../router/rootRouter');
const registerRouter = require('../router/registerRouter');
const loginRouter = require('../router/loginRouter');
const userRouter = require('../router/userRouter');
const gameDoubleRouter = require('../router/gameDoubleRouter');
const doublePlayRouter = require('../router/doublePlayRouter');
const doubleUserBetController = require('../router/doubleUserBetRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://cold-frontend.vercel.app'
  );
  next();
});

app.use('/', initialRoute);
app.use('/Auth', registerRouter);
app.use('/Auth', loginRouter);
app.use('/user', userRouter);
app.use('/gameDouble', gameDoubleRouter);
app.use('/gameDouble', doublePlayRouter);
app.use('/gameDouble', doubleUserBetController);

const port = 8080;
module.exports = { app, port, db };
