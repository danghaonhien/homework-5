
console.log(moment())
var day = moment();
$("#realTime").text(day)
// let $yourText = $(".yourText").val();
$("#do").on("click", function(){
$("input[type='text']").each(function(){
    var id = $(this).attr('id');
    var value = $(this).val();
    localStorage.setItem(id, value, moment())

}) 
})
$("#dont").on("click", function(){
    $("#yourText").val("")
    $("input[type='text']").each(function(){
        var id = $(this).attr('id');
       var value= localStorage.removeItem(id)
        $(this).val(value)
    })   
})



