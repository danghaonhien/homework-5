$(document).ready(function() {
  console.log(moment());
  var day = moment().format("MMM Do YY");
  $("#realTime").text(day);
  let time = moment().format("hh:mm a");
  $("#time").text(time);
  var currentTime = new Date(time);
  var saveTime = currentTime.getTime();
  
  localStorage.setItem('time', saveTime );

  var todoInput = $("#todo-text");
  var todoList = $("#todo-list");
  var todoCountSpan = $("#todo-count");
  var mainInput = $("#todoText");
  let mainTodos = [];
  let noonInput = $("#noonTodoText");
  let eveningInput = $("#eveningTodoText");
  var todos = [];
  let noonTodos = [];
  let eveningTodos = [];
  // let saveTime = [];
  init();
  mainInit();
  noonInit();
  eveningInit();
  // function {
  //   for (var i = 0; i < saveTime.length; i++) {
  //     saveTime[i].push(time);
  //   }
  // }
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
      p2.text(noonTodo);
      p2.attr("data-index", i);
      $("#noonList").append(p2);
    }
  }
  function renderEveningTodos() {
    // Clear todoList element and update todoCountSpan
    $("#eveningList").html("");
    // Render a new p for each todo
    for (var i = 0; i < eveningTodos.length; i++) {
      var eveningTodo = eveningTodos[i];
    
      var p3 = $("<p>");
      p3.addClass("ui segment");
      p3.text(eveningTodo);
      p3.attr("data-index", i);
      $("#eveningList").append(p3);
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
  function eveningInit() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    
    let storedEveningTodos = JSON.parse(localStorage.getItem("eveningTodos"));
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedEveningTodos !== null) {
      eveningTodos = storedEveningTodos;
    }

    renderEveningTodos();
    // Render todos to the DOM
  }

  function storeTime(){
  
    localStorage.setItem("time", JSON.stringify(time));
   
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
  function storeEveningTodos() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("eveningTodos", JSON.stringify(eveningTodos));
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
    storeTime()
  });
  // When form is submitted...
  $("#saveBtn").on("click", function(event) {
    event.preventDefault();

    let mainText = mainInput.val().trim();
    // Return from function early if submitted todoText is blank
    if (mainText === "") {
      return;
    }
    $("#morning").css("background-color", "")
    // Add new todoText to todos array, clear the input
    mainTodos.push(mainText);
    mainInput.val("");
    // Store updated todos in localStorage
    storeMainTodos();
    renderMainTodos();
    storeTime()
   
  });
  //   Save Noon Btn
  $("#saveNoonBtn").on("click", function(event) {
    event.preventDefault();

    let noonText = noonInput.val().trim();
    // Return from function early if submitted todoText is blank
    if (noonText === "") {
      return;
    }
    $("#afternoon").css("background-color", "")
    // Add new todoText to todos array, clear the input
    noonTodos.push(noonText);
    noonInput.val("");
    // Store updated todos in localStorage
    storeNoonTodos();
    renderNoonTodos();
    storeTime()
  });
  //   Save Evening Btn
  $("#saveEveningBtn").on("click", function(event) {
    event.preventDefault();

    let eveningText = eveningInput.val().trim();
    // Return from function early if submitted todoText is blank
    if (eveningText === "") {
      return;
    }
    $("#evening").css("background-color", "")
    // Add new todoText to todos array, clear the input
    eveningTodos.push(eveningText);
    eveningInput.val("");
    // Store updated todos in localStorage
    storeEveningTodos();
    renderEveningTodos();
    storeTime()
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
      storeTime()
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
      if(mainTodos.length <= 0)
      $("#morning").css("background-color", "#05BF7D");

      // Store updated todos in localStorage, re-render the list
      storeMainTodos();
      storeTime();
      renderMainTodos();
 
    }
  });
  //   Complete Noon Btn
  $("#completeNoonBtn").on("click", function(event) {
    var e = event.target;
    event.preventDefault();
    noonInput.val("");
    // If that element is a button...
    if (e.matches("#completeNoonBtn") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = e.getAttribute("data-index");
      noonTodos.splice(index, 1);
      $("#noonList").empty();

    if(noonTodos.length <= 0) 
    $("#afternoon").css("background-color", "#05BF7D");

     

      // Store updated todos in localStorage, re-render the list
      storeNoonTodos();
      renderNoonTodos();
      storeTime();
     
    }
  });
  //   Complete Evening Btn
  $("#completeEveningBtn").on("click", function(event) {
    var e = event.target;
    event.preventDefault();
    eveningInput.val("");
    // If that element is a button...
    if (e.matches("#completeEveningBtn") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = e.getAttribute("data-index");
      eveningTodos.splice(index, 1);
      $("#eveningList").empty();
      if(eveningTodos.length <= 0)
      $("#evening").css("background-color", "#05BF7D");

      // Store updated todos in localStorage, re-render the list
      storeEveningTodos();
      renderEveningTodos();
      storeTime();
    }
  });
  $("#resetBtn").on("click", function(event) {
    var e = event.target;
    event.preventDefault();
    if (e.matches("#resetBtn") === true) {
        var index = e.getAttribute("data-index");
        eveningTodos.splice(index, 1);
        noonTodos.splice(index, 1);
        mainTodos.splice(index, 1);
        todos.splice(index,1)
    localStorage.clear();
    $("#mainList").empty();
    $("#noonList").empty();
    $("#eveningList").empty();  
    $("#todo-list").empty();
    storeMainTodos();
      renderMainTodos();
    storeNoonTodos();
      renderNoonTodos();
    storeEveningTodos();
      renderEveningTodos();
      storeTodos();
      renderTodos();
      storeTime();
    }
  });
});
