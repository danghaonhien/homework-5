$(document).ready(function() {
  console.log(moment());
  var day = moment().format("MMM Do YY");
  $("#realTime").text(day);
  let time = moment().format("hh:mm a");
  $("#time").text(time);

  var todoInput = $("#todo-text");
  var todoForm = $("#todo-form");
  var todoList = $("#todo-list");
  var todoCountSpan = $("#todo-count");
  var todos = [];
  init();

  function renderTodos() {
    // Clear todoList element and update todoCountSpan
    todoList.html("");
    todoCountSpan.text(todos.length);

    // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];

      var li = $("<li>");
      li.text(todo);
      li.attr("data-index", i);

      var button = $("<button>");
      button.text("Done");

      li.append(button);
      todoList.append(li);
    }
  }

  function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var storedTodos = JSON.parse(localStorage.getItem("todos"));

    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTodos !== null) {
      todos = storedTodos;
    }

    // Render todos to the DOM
    renderTodos();
  }

  function storeTodos() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // When form is submitted...
  $("#addBtn").on("click", function(event) {
    event.preventDefault();

    var todoText = todoInput.val().trim();

    // Return from function early if submitted todoText is blank
    if (todoText === "") {
      return;
    }

    // Add new todoText to todos array, clear the input
    todos.push(todoText);
    todoInput.val("");

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  });

  // When a element inside of the todoList is clicked...
  todoList.on("click", function(event) {
    var element = event.target;

    // If that element is a button...
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = element.parentElement.getAttribute("data-index");
      todos.splice(index, 1);

      // Store updated todos in localStorage, re-render the list
      storeTodos();
      renderTodos();
    }
  });
});
