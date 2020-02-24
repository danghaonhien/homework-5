$(document).ready(function() {
  console.log(moment());
  var day = moment().format("MMM Do YY");
  $("#realTime").text(day);
  let time = moment().format("hh:mm a");
  $("#time").text(time);

  var todoInput = $("#todo-text");
  var todoList = $("#todo-list");
  var todoCountSpan = $("#todo-count");
  var mainInput = $("#todoText");
  let mainTodos = [];
  var todos = [];
  init();
  mainInit();

  function renderTodos() {
    // Clear todoList element and update todoCountSpan
    todoList.html("");
    todoCountSpan.text(todos.length);
    // Render a new p for each todo
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
      var p = $("<p>");
      p.addClass("ui segment");
      p.text(todo);
      p.attr("data-index", i);

      var button = $("<button>");
      button.text("DONE");
      button.addClass("right floated mini ui basic button");
      p.append(button);
      todoList.append(p);
    }
  }
  function renderMainTodos() {
    // Clear todoList element and update todoCountSpan
    mainInput.html("");
    // Render a new p for each todo
    for (var i = 0; i < mainTodos.length; i++) {
      var mainTodo = mainTodos[i];
      var p = $("<p>");
      p.text(mainTodo);
      mainInput.append(p);
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
  function mainInit() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object

    let storedMainTodos = JSON.parse(localStorage.getItem("mainTodos"));
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedMainTodos !== null) {
      mainTodos = storedMainTodos;
    }
    $("#morning").removeClass("green column")
    renderMainTodos();
    // Render todos to the DOM
  }

  function storeTodos() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function storeMainTodos() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("mainTodos", JSON.stringify(mainTodos));
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
  // When form is submitted...
  $("#saveBtn").on("click", function(event) {
    event.preventDefault();
    let mainText = mainInput.val().trim();
    // Return from function early if submitted todoText is blank
    if (mainText === "") {
      return;
    }
    // Add new todoText to todos array, clear the input
    mainTodos.push(mainText);
    mainInput.val(mainText);
    $("#morning").removeClass("green column")
    // Store updated todos in localStorage
    storeMainTodos();
    renderMainTodos();
  });

  $("#completeBtn").on("click", function(e) {
    e.preventDefault();
    mainInput.val("");
    localStorage.clear("mainTodos")
    storeMainTodos();
    $("#morning").addClass("green column")
    renderMainTodos();
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
