
var mongoose = require('mongoose');

mongoose.set('debug', true);
//lets us see what happening at any given point instead of silently failing

mongoose.connect('mongodb://localhost/todo-api');
// connects to mongod database server '/todo-api' is the name of our new DB

mongoose.Promise = Promise;
// allows us to use the promise syntax

module.exports.Todo = require('./todo');
//lets us use the model in todo.js

////mongoose has documents, relational databases have tables

//1)- models/index.js : allows "mongoose.connect" to create a database named todo-api

//2)- models/todo.js - Schema is what  mongoose will use to create the "document"  (tables) in  mongodb with the columns:( name, completed, and createdDate) or whatever columns you wish here.

//3)- module.exports = Todo-- is how mongoose will talk with mongodb and allow you save,create delete and put which we didn't get to yet.
