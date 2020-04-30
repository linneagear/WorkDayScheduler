// set our current time using moment.js and display it FIRST
var nowMoment = moment();
var displayMoment = document.getElementById('currentDay');
displayMoment.innerHTML = nowMoment.format('MMMM Do YYYY, h:mm a');

// JavaScript function that wraps everything
$(document).ready(function() {

    // set item before get item
    $("#save1").on("click", function () {
        var text = $("#event1").val();
        console.log(text);
        //set items in local storage.
        localStorage.setItem("text", text);
        console.log(localStorage.getItem("text"));
    })
    


    // need current Time
    // var currentTime = moment().hour();
    var currentTime = 11;

    // loop through all time blocks using the each function
    $(".time-block").each(function () {

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
    })

    // function hourNumberFromHourString() {
    //       "8 AM" = 8
    //       "9 AM" = 9

        
    //   }

});
// data attribute?



function newCalendar() {
    $(".description").empty();
}

function initiliazeCalendar() {
    
}



function getItems() {
    // value of ALL events, get the item from ALL hours
    $("#event").val(localStorage.getItem("hour"));
}


    