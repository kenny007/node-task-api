//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const uri = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(uri, {useNewUrlParser: true}, (err, client) => {
 if(err){
    return console.log('Unable to connect to MongoDB Server')
 } 
 console.log('Connected to MongoDB Server');
 const db = client.db('TodoApp');

// db.collection('Todos').deleteMany({text: 'Something to do'}).then((result)=>{
//     console.log(result);
// })
// db.collection('Todos').deleteOne({text: 'Finish the angular course'})
//              .then((result) => { console.log(result)})
 
//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed:false}).then((results) => {
//  console.log(results);
// })

db.collection('Todos').deleteMany({text: 'Finish the angular course'})
   .then((results) => {console.log(results)})

//client.close();
});