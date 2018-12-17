// var todosArray = [];
// localStorage.setItem('todos',JSON.stringify(todosArray));
// var storage = JSON.parse(localStorage.getItem('todos'));

//       //  Form Text box
// const formField = document.querySelector('form');
// const input = document.getElementById('user-todo');
// formField.addEventListener('submit', function(event)
// {
//   event.preventDefault();
//   let todo = document.createElement('li');
//     todo.textContent = input.value;
//     localStorage.setItem('todo', input.value);
//   let todosList = document.querySelector('ul');
//     todosList.appendChild(todo);
//     input.value = "";
// });
//
//       //  Clear button
// let todosList = document.querySelector('ul');
// let todo = document.createElement('li');
// let todoItems = document.querySelector('li');
// let button = document.querySelector('button');
//   button.addEventListener('click', function()
//   {
//     while (todosList.firstChild) {
//         todosList.removeChild(todosList.firstChild);
//         localStorage.clear();
//     }
//   });

var form = document.querySelector('form');
   var todoList = document.querySelector('ul');
   var button = document.querySelector('button');
   var input = document.getElementById('user-todo');
   var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

   localStorage.setItem('todos', JSON.stringify(todosArray));
   var storage = JSON.parse(localStorage.getItem('todos'));

   form.addEventListener('submit', function (e) {
     e.preventDefault();
     todosArray.push(input.value);
     localStorage.setItem('todos', JSON.stringify(todosArray));
     todoMaker(input.value);
     input.value = "";
   });

   var todoMaker = function(text) {
     var todo = document.createElement('li');
     todo.textContent = text;
     todoList.appendChild(todo);
   }

   for (var i = 0; i < storage.length; i++) {
     todoMaker(storage[i]);
   }

   button.addEventListener('click', function() {
     localStorage.clear();
     while (todoList.firstChild) {
       todoList.removeChild(todoList.firstChild);
       localStorage.removeItem('todos');
     }
   })
