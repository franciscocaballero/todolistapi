
var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name cannot be blank!'
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})

var Todo = mongoose.model('Todo', todoSchema);
//here we're just compiling our scehma into a model

module.exports = Todo;
//exporting model so that we can use it with in other files

//name
//completed
//created_date
