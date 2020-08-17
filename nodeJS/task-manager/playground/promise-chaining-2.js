require('../src/db/mongoose');
const Task  = require('../src/models/task');
const User = require('../src/models/user');

// Task.findByIdAndDelete('5f3a18fd4b9b912f78208fd5').then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false});
// }).then( (result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed:false});
    return count;
};

deleteTaskAndCount('5f3a3e84c7bcce315454b0f5').then((incompleteCount) => {
    console.log(incompleteCount);
}).catch((e) =>{
    console.log(e);
});
