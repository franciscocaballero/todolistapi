
var express= require('express');
var router = express.Router();
//Router lets us reak routes into module chunks and require them in the main index.js

var db = require("../models")
//Gives us access to our models / database
var helpers = require('../helpers/todos')

router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodos)
//here were simpily refactoring our api and chaning routes together
// router.get('/',)
//
// router.post('/',)
//Route to create new todo

router.route('/:todoId')
.get(helpers.showTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)
// deletes singel todo
// router.delete('/:todoId', )


// router.get('/:todoId',);
//route to get/show single todo "show route"

// router.put('/:todoId', )
//Put is for updating




module.exports = router;
