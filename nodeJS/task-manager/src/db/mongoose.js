const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: false,
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
