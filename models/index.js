
var mongoose = require('mongoose');

mongoose.set('debug', true);
//lets us see what happening at any given point instead of silently failing

mongoose.connect('mongodb://localhost/todo-api');
// connects to mongod database server

mongoose.Promise = Promise;
// allows us to use the promise syntax

module.exports.Todo = require('./todo');
//lets us use the model in todo.js
