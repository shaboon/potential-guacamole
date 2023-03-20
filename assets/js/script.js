$(document).ready(function () {
  // Code to save when saveBtn is clicked
  $(".saveBtn").on("click", function () {
    var task = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, task);
  });

  // TODO: Add code to apply the past, present, or future class to each time

  function whatTime() {
    var currentHour = dayjs().format("H");
    console.log(currentHour);

    // Loops over time blocks to evaluate time status
    $(".time-block").each(function () {
      var taskTime = parseInt($(this).attr("id").split("hour-")[1]);
      console.log(taskTime);
      console.log("line 30");

      // if tests the current hour only and compares it to the iteration of tasktime during loop run
      // If greater than, makes it green via class change
      if (currentHour < taskTime) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
        console.log("future");
        // If lower than, makes it red via class change
      } else if (currentHour > taskTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
        console.log("past");
        // otherwise it makes it gray for current time via class change
      } else {
        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");
        console.log("present");
      }
    });
  }

  // Code to pull all local-saved tasks
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  //Code for header date, current time excluded to avoid interval/constant update
  var date = document.querySelector("#currentDay");
  var today = dayjs().format("MMM D, YYYY");
  date.textContent = today;

  //When Page Loads, scripts will run whatTime function
  whatTime();
});
