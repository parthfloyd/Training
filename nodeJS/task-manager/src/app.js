const express = require('express');
require('./db/mongoose'); //this ensures that the file run, we simply dont want to access any part
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

app.use(express.json()); // By adding this -express automatically parse json data for us
app.use(userRouter); //Adding user Routes
app.use(taskRouter); //Adding task Routes

module.exports = app;