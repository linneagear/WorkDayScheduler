// set our current time using moment.js and display it FIRST
var nowMoment = moment();
var displayMoment = document.getElementById('currentDay');
displayMoment.innerHTML = nowMoment.format('MMMM Do YYYY, h:mm a');

// JavaScript function that wraps everything
$(document).ready(function() {


$(".saveBtn").on("click", function () {
    var text = $(".description").val();
    var time = parseInt($(".hour").text());

    //set items in local storage.
    localStorage.setItem("time", JSON.stringify(time));
    localStorage.setItem("text", JSON.stringify(text));
})
// need current Time
// var currentTime = moment().hour();
var currentTime = 11;

    // loop through all time blocks using the each function
    $(".time-block").each(function () {
        // need the attribute of the ID 
        var blockHour = parseInt($(this).text());
        console.log( blockHour, currentTime)
       

        // This will give us the gray, green, and red boxes
        if(blockHour < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } 
        else if (currentTime === blockHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }

});



// for every event, save that text to the right time storage

// when time is after current time, then add class "past"
// when time is before current time, then add class "future"
// if current time === event time, then add class "present"

 //set items in local storage.
//  localStorage.setItem(time, text);
});

initializeCalendar();

function initializeCalendar() {
    // first get local storage from each hour and event to see if anything is saved
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));

}

// grab the description class, as this is where our text will be
// var events = $("description");
// var event1 = $("#event1");

// function storeEvents() {
//     // Stringify and set "todos" key in localStorage to todos array
//     localStorage.setItem("events", JSON.stringify(events));
//   }

//   // store events for that time when click the save button
//   $("#save1").on("click", function() {
//     localStorage.setItem("event1", JSON.stringify("#event1"));
