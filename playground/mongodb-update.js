//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const uri = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(uri, {useNewUrlParser: true}, (err, client) => {
 if(err){
    return console.log('Unable to connect to MongoDB Server')
 } 
 console.log('Connected to MongoDB Server');
 const db = client.db('TodoApp');

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5b84b3f1ef80452f8460a47d')
// }, {
//     $set: {
//         completed: false
//     }
// },{
//     returnOriginal: false
// }).then((result) => {
//   console.log(result);
// })
//  //client.close();

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b840df1d31e2d3130388ea8')
}, {
    $set: {
        name: "Ariyo Adebayo"
    },
    $inc: {
        age: 1
    }
}, {
    returnOriginal: false
}).then((results) => {
  console.log(results);
})

});