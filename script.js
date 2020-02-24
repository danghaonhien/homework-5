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
  let noonInput=$("#noonTodoText")
  var todos = [];
  let noonTodos = [];
  init();
  mainInit();
  noonInit();

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
    $("#mainList").html("");
    // Render a new p for each todo
    for (var i = 0; i < mainTodos.length; i++) {
      var mainTodo = mainTodos[i];
      var p1 = $("<p>");
      p1.addClass("ui segment");
      p1.addClass("pChild");
      p1.text(mainTodo);
      p1.attr("data-index", i);
      $("#mainList").append(p1);
    }
  }
  function renderNoonTodos() {
    // Clear todoList element and update todoCountSpan
    $("#noonList").html("");
    // Render a new p for each todo
    for (var i = 0; i < noonTodos.length; i++) {
      var noonTodo = noonTodos[i];
      var p2 = $("<p>");
      p2.addClass("ui segment");
      p2.addClass("pChild");
      p2.text(noonTodo);
      p2.attr("data-index", i);
      $("#noonList").append(p2);
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

    renderMainTodos();
    // Render todos to the DOM
  }
  function noonInit() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object

    let storedNoonTodos = JSON.parse(localStorage.getItem("noonTodos"));
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedNoonTodos !== null) {
      noonTodos = storedNoonTodos;
    }

    renderNoonTodos();
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
  function storeNoonTodos() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("noonTodos", JSON.stringify(noonTodos));
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
    mainInput.val("");
    // Store updated todos in localStorage
    storeMainTodos();
    renderMainTodos();
  });
//   Save Noon Btn
  $("#saveNoonBtn").on("click", function(event) {
    event.preventDefault();

    let noonText = noonInput.val().trim();
    // Return from function early if submitted todoText is blank
    if (noonText === "") {
      return;
    }
    // Add new todoText to todos array, clear the input
    noonTodos.push(noonText);
    noonInput.val("");
    // Store updated todos in localStorage
    storeNoonTodos();
    renderNoonTodos();
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
  $("#completeBtn").on("click", function(event) {
    var e = event.target;
    event.preventDefault();
    mainInput.val("");
    // If that element is a button...
    if (e.matches("#completeBtn") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = e.getAttribute("data-index");
      mainTodos.splice(index, 1);
      $("#mainList").empty();

      $("#morning").css("background-color", "#05BF7D");

      // Store updated todos in localStorage, re-render the list
      storeMainTodos();
      renderMainTodos();
    }
  });
//   Complete Noon Btn
  $("#completeNoonBtn").on("click", function(event) {
    var e = event.target;
    event.preventDefault();
    mainInput.val("");
    // If that element is a button...
    if (e.matches("#completeNoonBtn") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = e.getAttribute("data-index");
      noonTodos.splice(index, 1);
      $("#noonList").empty();

      $("#afternoon").css("background-color", "#05BF7D");

      // Store updated todos in localStorage, re-render the list
      storeNoonTodos();
      renderNoonTodos();
    }
  });
});
