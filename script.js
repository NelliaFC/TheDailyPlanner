$(document).ready(function(){
// moment.js current time 
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'))

    //create function for saveButton when clicked puts into local storage//
    $(".saveBtn").on("click", function(){
var textDescription=$(this).siblings(".description").val().trim()
var hourID=$(this).parent().attr("id")

//create a function to store in the local storage, set item (key, value)//
localStorage.setItem(hourID, textDescription)
 })

 $("#8 .description").val(localStorage.getItem(8))
 $("#9 .description").val(localStorage.getItem(9))
 $("#10 .description").val(localStorage.getItem(10))
 $("#11 .description").val(localStorage.getItem(11))
 $("#12 .description").val(localStorage.getItem(12))
 $("#13 .description").val(localStorage.getItem(13))
 $("#14 .description").val(localStorage.getItem(14))
 $("#15 .description").val(localStorage.getItem(15))
 $("#16 .description").val(localStorage.getItem(16))
 $("#17 .description").val(localStorage.getItem(17))
 $("#18 .description").val(localStorage.getItem(18))

//create a functiont that color codes rowbased on past, present, future//

function colorTime(){
var currentTime = moment().hours()
$(".time-block").each(function (){
var parentDivTime = parseInt($(this).attr("id"));

if (parentDivTime>currentTime){
//remove the class using $(this).removeClass
$(this).removeClass ("present past")
$(this).addClass("future")}

else if (currentTime>parentDivTime){
//remove the class of future and present//
$(this).removeClass("future present")
$(this).addClass("past")}

else if (currentTime===parentDivTime){
    //remove future and past
    $(this).removeClass("future past")
    $(this).addClass("present")}

})

}
colorTime()



    












});