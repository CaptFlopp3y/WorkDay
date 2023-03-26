var currentDate = dayjs().format("dddd, MMMM D");
$("#currentDay").text(currentDate);

$(function () {

  $(".saveBtn").on("click", function() {
    var id = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(id, description);
  });

  
var currentHour = dayjs().hour();
$(".time-block").each(function() {
  var id = $(this).attr("id");
  var hour = parseInt(id.split("-")[1]);
  if (hour < currentHour) {
    $(this).addClass("past").removeClass("present future");
  } else if (hour === currentHour) {
    $(this).addClass("present").removeClass("past future");
  } else {
    $(this).addClass("future").removeClass("past present");
  }
});


$(".time-block").each(function() {
  var id = $(this).attr("id");
  var description = localStorage.getItem(id);
  $(this).children(".description").val(description);
});


});
