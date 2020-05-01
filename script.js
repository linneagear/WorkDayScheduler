// set our current time using moment.js and display it FIRST for it to display
var nowMoment = moment();
var displayMoment = document.getElementById('currentDay');
displayMoment.innerHTML = nowMoment.format('MMMM Do YYYY, h:mm a');

// JavaScript function that wraps everything
$(document).ready(function() {

   function addButtonListener(id) {

        var buttonID = "#save" + id
        var eventID = "#event" + id
        var itemKey = "text" + id
        // cancatenates the number of that time block with the designated button, event, and item key
        $(buttonID).on("click", function () {
            var text2 = $(eventID).val();
            localStorage.setItem(itemKey, text2);
        })
   }

    // loop through all the buttons
    for (var i = 1; i <= 9; i++) {
       addButtonListener(i)
    }
  
        // get items back out of local storage to then display using a for loop
        console.log(localStorage.getItem("text1"));

        for (var i = 1; i <= 9; i++) {
            var eventID = "#event" + i
            var itemKey = "text" + i
            $(eventID).text(localStorage.getItem(itemKey))
        }

    // need current Time
    var currentTime = moment().hour();

    // loop through all time blocks using the each function
    $(".time-block").each(function () {
        // parse out the integer from the id of the "time-block" class
        var blockHour = parseInt($(this).attr("id"));
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
});


