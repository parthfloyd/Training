const express = require('express');
require('./db/mongoose'); //this ensures that the file run, we simply dont want to access any part
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // By adding this -express automatically parse json data for us
app.use(userRouter); //Adding user Routes
app.use(taskRouter); //Adding task Routes


app.listen(port, ()=> {
    console.log("Server is up on Port: ", port);
});
