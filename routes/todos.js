
var express= require('express');
var router = express.Router();
//Router lets us reak routes into module chunks and require them in the main index.js

var db = require("../models")
//Gives us access to our models / database
router.get('/',function(req,res){
db.Todo.find() //'finds' all models !ß
.then(function(todos){
  res.json(todos);
})
.catch(function(err){
  res.send(err);
})
});

router.post('/', function(req,res){
  db.Todo.create(req.body)
  .then(function(newTodo){
    res.status(201).json(newTodo);
  })
  .catch(function(err){
     res.send(err);
   })});

router.get('/:todoId',function(req,res){
  db.Todo.findById(req.params.todoId)
  .then(function(foundTodo){
    res.json(foundTodo)
  })
  .catch(function(err){
    res.send(err)
  })
});

router.put('/:todoId', function(req,res){
db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then(function(todo){
    res.json(todo)
  })
  .catch(function(err){
    res.send(err)
  })
})
//Put is for updating


router.delete('/:todoId', function(req,res){
  db.Todo.remove({_id: req.params.todoId})
    .then(function(){
      res.json({message: 'Has been deleted'})
    })
})

module.exports = router;
