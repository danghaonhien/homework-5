
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
    $(myList).after($("#yourText"))
})

// let $yourText = $(".yourText").val();
$("#do").on("click", function(){
$("input[type='text']").each(function(){
    var id = $(this).attr('id');
    var value = $(this).val();
    $("#yourText").css("border-color", "green")
    localStorage.setItem(id, value)
    
}) 

})
$("#dont").on("click", function(){
    $("#yourText").val("")
    $("input[type='text']").each(function(){
        $("#yourText").css("border-color", "red")
        var id = $(this).attr('id');
       var value= localStorage.removeItem(id)
        $(this).val(value)
    })   
})
})


