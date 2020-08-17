//THIS FILE IS JUST FOR PRACTICE AND REFERENCE

//CRUD

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';



MongoClient.connect(connectionURL,{useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to the database!');
    }

    const db = client.db(databaseName);
    
    

});




//INSERT DATA
// db.collection('users').insertOne({
    //     name: "Parth",
    //     age: 24
    // },(error, result) => {
    //     if(error) {
    //         return console.log("Unable to insert user");
    //     } 

    //     console.log(result.ops);
    // });



    // db.collection('users').insertMany([{
    //     name: 'Jen',
    //     age: 28
    // }, {
    //     name: 'Gunther',
    //     age: 31
    // }], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents');
    //     }

    //     return console.log(result.ops);
    // });



    // db.collection('tasks').insertMany([{
    //     description: 'Water the plants',
    //     completed: true
    // }, {
    //     description: 'Find the missing sock',
    //     completed: false
    // }, {
    //     description: "Pay the Rent",
    //     completed: true
    // }], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to add tasks");
    //     }

    //     return console.log("Following Tasks Added: " + JSON.stringify(result.ops));
    // });


//MONGODB OBJECT ID
// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());
// const ObjectID = mongodb.ObjectID;


//READ DATA
// db.collection('users').find({age: {$gte: 24}}).toArray((error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // });

    // db.collection('users').find({age: {$gte: 24}}).count((error, count) => {
    //     if(error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(count);
    // });

    // db.collection('tasks').findOne({},{sort: ['_id','descending']}, (error, result) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     return console.log(result);
    // });

    // db.collection('tasks').find({completed: true}).toArray((error,result) => {
    //     if(error) {
    //         return console.log(error);
    //     }
    //     return console.log(result);
    // });


//UPDATE DATA
// db.collection('users').updateOne({
    //     _id :  new ObjectID("5f369809eb2c1609500aba31")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result)=> {
    //     console.log(result);
    // }).catch((error)=> {
    //     console.log(error);
    // });

    // db.collection('tasks').updateMany({},{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

//DELETE DATA
// db.collection('users').deleteMany({
    //     age: {
    //         $gt : 27
    //     }
    // }).then((result)=> {
    //     console.log(result);
    // }).catch((error)=> {
    //     console.log(error);
    // });

    // db.collection('tasks').deleteOne({
    //     description: "Water the plants"
    // }).then((result)=> {
    //     console.log(result);
    // }).catch((error)=> {
    //     console.log(error);
    // });