$(document).ready(function(){
  $.getJSON('http://localhost:3000/apis/todos')
    .then(addTodos)

    $('#todoInput').keypress(function(event){
      if(event.which == 13){ //which contains the keycode value 13 = enter key
        createTodo();
      }
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
  var newTodo = $('<li class="task">' + todo.name +  '</li>');
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
