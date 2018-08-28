//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

const uri = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(uri, {useNewUrlParser: true}, (err, client) => {
 if(err){
    return console.log('Unable to connect to MongoDB Server')
 } 
 console.log('Connected to MongoDB Server');
 const db = client.db('TodoApp');

//  db.collection('Todos').insertOne({
//      text:'Something to do',
//      completed: false
//  }, (err, result) => {
//     if(err){
//          return console.log('Unable to insert todo', err)
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2))
//  })

// db.collection('Users').insertOne({
//     name: 'Kehinde Adebayo',
//     age: 32,
//     location: 'Estonia, Tallinn'
// }, (err, result) => {
//     if(err){
//       return console.log('Unable to insert user', err)
//     }

//     console.log(result.ops[0]._id.getTimestamp());
// })

//  client.close();
});