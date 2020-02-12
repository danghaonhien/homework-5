
$(document).ready(function(){
    
console.log(moment())
var day = moment();
$("#realTime").text(day)
let time = 7;

let myList = $("#myList")
$("#addBtn").on("click", function(e){
    e.preventDefault();
    // let newDiv = $("<div>")
    // newDiv.append(myList)
    // $("#newTask").append($(newDiv))
    let newTask = $(".myInput").length+1;
    $("#myList").append('<div class="myInput">  <div class="ui equal width grid">  <div class="column">   <div class="ui segment" id="time" id="timeValue"></div></div> <div class="eight wide column"><div class="ui fluid icon input"> <input type="text" id="yourText" placeholder="Plan your Tackle...."/><i class="hand rock outline icon" class="icon"></i></div></div>   <div class="column"><div class="ui buttons"><button class="ui button" id="dont">Dont</button><div class="or"></div><button class="ui secondary button" id="do">Do</button></div></div>')
})

// let $yourText = $(".yourText").val();
$("#do").on("click", function(){
$("input[type='text']").each(function(){
    var id = $(this).attr('class');
    var value = $(this).val();
    $(".yourText").css("border-color", "green")
    localStorage.setItem(id, value) 
}) 

})
$(document).on('click','#dont', function(){
    $(this).closest('.myInput').remove();
    $("input[type='text']").each(function(){
    $("#yourText").val("")
    var id = $(this).attr('id');
    var value= localStorage.removeItem(id)
    $(this).val(value)
    
       
})
 })
// $("#dont").on("click", function(){
 
    
//         $("#yourText").css("border-color", "red")
//        
   
// })
})


