$(document).ready(function(){  //wait to load until the DOM is ready
  $.getJSON("/api/todos") //show todos
      .then(addTodos)

  $('#todoInput').keypress(function(event){
    if(event.which == 13){ // enter pressed
      createTodo();
    }
  });

  //need to add this listener to .list because it exists at the time the page loads, but the span may not
  $('.list').on("click", 'span', function(event){
    event.stopPropagation(); //when we click on the span, don't also trigger the parent li click listener
    removeTodo($(this).parent()); //send the whole li as an argument
  });

  $('.list').on("click", 'li',function(){
    updateTodo($(this));
  })

});

function addTodos(todos){
  todos.forEach(function(todo){
    addTodo(todo);
  });
}

function addTodo(todo){
  var newTodo = $('<li class="task">'+ todo.name + '<span>X</span></li>');
  newTodo.data('id', todo._id); //jQuery holds this key:value in memory
  newTodo.data('completed', todo.completed);
  if(todo.completed){
    newTodo.addClass("done");
  }
  $(".list").append(newTodo);
}

function createTodo(){
  var userInput = $('#todoInput').val();
  $.post('/api/todos', {name: userInput})
      .then(function(newTodo){
        $('#todoInput').val(''); //clear input
        addTodo(newTodo);
      })
      .catch(function(err){
        console.log(err);
      })
}

function removeTodo(todo){
  var deleteUrl = '/api/todos/' + todo.data('id');
  $.ajax({ //delete from database
    method: 'DELETE',
    url: deleteUrl
  })
      .then(function(data){
        todo.remove(); //remove li from page
      })
      .catch(function(err){
        console.log(err);
      })
}

function updateTodo(todo){
  var updateUrl = '/api/todos/' + todo.data('id');
  var isDone = !todo.data('completed');
  var updateData = {completed: isDone};
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
      .then(function(updatedTodo){
        todo.toggleClass("done");
        todo.data('completed', isDone);
      })
      .catch(function(err){
        console.log(err);
      })
}