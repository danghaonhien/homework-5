
$(document).ready(function(){
    
console.log(moment())
var day = moment().format('MMM Do YY');
$("#realTime").text(day)
let time = moment().format("hh:mm a");
$("#time").text(time);
var data = JSON.parse(localStorage.getItem("todoData"));
data =data || {};
$("#addBtn").on("click", function(e){
    e.preventDefault();
   
    let newTask = $(".myInput").length+1;
    $("#myList").append('<div class="myInput">  <div class="ui equal width grid">  <div class="column">   <div class="ui segment" id="time" id="timeValue"></div></div> <div class="eight wide column"><div class="ui fluid icon input"> <input type="text" id="yourText" placeholder="Plan your Tackle...."/><i class="hand rock outline icon" class="icon"></i></div></div>   <div class="column"><div class="ui buttons"><button class="ui button" id="dont">Dont</button><div class="or"></div><button class="ui secondary button" id="do">Do</button></div></div>')
})
// let $yourText = $(".yourText").val();
$(document).on('click','#do', function(){
$("input[type='text']").each(function(){
    var $id = $(this).attr('class');
    var value = $(this).val();
    id = new Date().getTime();
    $("#yourText").css("border-color", "green")
    tempData = {
        id : id,
        hour:time,
        date: day,
        text:value
    };
    // Saving element in local storage
    data[id] = tempData;
    localStorage.setItem("todoData", JSON.stringify(data));
  
}) 

})
$(document).on('click','#dont', function(){
    $(this).closest('.myInput').remove();
    $("input[type='text']").each(function(){
    var id = $(this).attr('id');
    var value= localStorage.removeItem(id)
    $(this).val(value)       
})
 })
})


