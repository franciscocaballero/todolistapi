$(document).ready(function(){
  $.getJSON('http://localhost:3000/apis/todos')
    .then(addTodos)

    $('#todoInput').keypress(function(event){
      if(event.which == 13){ //which contains the keycode value 13 = enter key
        createTodo();
      }
    });

    $('.list').on('click','li',function(){
      updateTodo($(this)) // this refers to object created in li
    })

    $('.list').on('click', 'span',function(event){
      event.stopPropagation();
      removeTodo($(this).parent())
    })
});

//displays all todos in api
function addTodos(todos){
    todos.forEach(function(todo){
     addTodo(todo);
    })
}

//adds styling to todo
function addTodo(todo){
  var newTodo = $('<li class="task">' + todo.name + ' <span>X</span></li>');
  newTodo.data('id', todo._id);// this is retraving the id so we can delte the todo
  newTodo.data('completed', todo.completed);// this is retraving the id so we can delte the todo
  // creating new <li></li>
  if(todo.completed){
    newTodo.addClass("done");
  }
  // if todo is completed this add .list class
  $('.list').append(newTodo);
}

// creates new todo
function createTodo(){
  //send request to create new todo
  var userInput = $('#todoInput').val();
    //send request to create new todo
    $.post('http://localhost:3000/apis/todos/', {name: userInput})
    // making post req and adding new obj as second param
    .then(function(newTodo){
      var userInput = $('#todoInput').val('');
      //clears whatever is in #todoInput
      addTodo(newTodo)

    })
    .catch(function(err){
      console.log(err)
    })
}

function removeTodo(todo){
  var clickedId = todo.data('id');
  var deleteUrl = 'http://localhost:3000/apis/todos/' + clickedId;
  // adding click listener to list because it is generated as soon as the
  //page loads
$.ajax({
  method: 'DELETE',
  url: deleteUrl
})
.then(function(data){
  todo.remove();
})
}

function updateTodo(todo){
  var updatedUrl = 'http://localhost:3000/apis/todos/' + todo.data('id');
  //creates url
  var isDone = !todo.data('completed');
  //'isDone' checks to see if its copmpleted
  var updateData = {completed: isDone}
  //send this data to server
  $.ajax({
    method: 'PUT',
    url: updatedUrl,
    data: updateData
  })
  .then(function(){
    todo.toggleClass('done');
    todo.data('completed', isDone);
  })
}
