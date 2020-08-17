const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});



// const task = new Task({
//     description: "Achieve World Peace!",
// });

// task.save().then(()=> {
//     console.log(task);
// }).catch((error) => {
//     console.log(error);
// });


// const me = new User({
//     name: "Biz",
//     age:  24,
//     email: '      biz@gmail.com          ',
//     password: "bestBasswordEver"
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error: ',error);
// });
