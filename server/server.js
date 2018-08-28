var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const uri = 'mongodb://localhost:27017/TodoApp';
mongoose.connect(uri, {useNewUrlParser: true});

var Todo = mongoose.model('Todo', {
    text: {
      type: String
    },
    completed: {
      type: Boolean
    },
    completedAt:{
      type: Number
    }
});

var newTodo = new Todo({
    text: 'Pay Elizabeth',
    completed: true,
    completedAt: 123
})

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e)=>{
    console.log('Unable to save', e)
})