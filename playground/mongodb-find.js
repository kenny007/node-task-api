//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const uri = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(uri, {useNewUrlParser: true}, (err, client) => {
 if(err){
    return console.log('Unable to connect to MongoDB Server')
 } 
 console.log('Connected to MongoDB Server');
 const db = client.db('TodoApp');

 db.collection('Users').find({
     name:'Kehinde Adebayo'}).count().then((count) => {
 console.log(`'Todos match: ${count}`);
 }, (err) => {
 console.log('Unable to fetch todos', err);
 });

//client.close();
});