$(document).ready(function(){
  $.getJSON('http://localhost:3000/apis/todos')
    .then(addTodos)

});

function addTodos(todos){
    todos.forEach(function(todo){
      var newTodo = $('<li class="task">' + todo.name + '</li>');
      $('.list').append(newTodo);
    })
}
