// set our current time using moment.js and display it FIRST
var nowMoment = moment();
var displayMoment = document.getElementById('currentDay');
displayMoment.innerHTML = nowMoment.format('MMMM Do YYYY, h:mm a');

// JavaScript function that wraps everything
$(document).ready(function() {
   
    // set item for that specific event when clicked
    $("#save1").on("click", function () {
        var text1 = $("#event1").val();
        console.log(text1);
        //set items in local storage.
        localStorage.setItem("text1", text1);
    })
    
    $("#save2").on("click", function () {
        var text2 = $("#event2").val();
        localStorage.setItem("text2", text2);
    })

   $("#save3").on("click", function () {
        var text3 = $("#event3").val();
        localStorage.setItem("text3", text3);
    })   

   $("#save4").on("click", function () {
        var text4 = $("#event4").val();
        localStorage.setItem("text4", text4);
    })
        
   $("#save5").on("click", function () {
        var text5 = $("#event5").val();
        localStorage.setItem("text5", text5);
    })
        
    $("#save6").on("click", function () {
        var text6 = $("#event6").val();
        localStorage.setItem("text6", text6);
    })

     $("#save7").on("click", function () {
        var text7 = $("#event7").val();
        localStorage.setItem("text7", text7);
    })
       
     $("#save8").on("click", function () {
        var text8 = $("#event8").val();
        localStorage.setItem("text8", text8);
    })

    $("#save9").on("click", function () {
        var text9 = $("#event9").val();
        localStorage.setItem("text9", text9);
    })
  
        // get items back out of local storage to then display 
        console.log(localStorage.getItem("text1"));
        $("#event1").text(localStorage.getItem("text1"))
        $("#event2").text(localStorage.getItem("text2"))
        $("#event3").text(localStorage.getItem("text3")) 
        $("#event4").text(localStorage.getItem("text4"))    
        $("#event5").text(localStorage.getItem("text5"))   
        $("#event6").text(localStorage.getItem("text6"))  
        $("#event7").text(localStorage.getItem("text7")) 
        $("#event8").text(localStorage.getItem("text8"))  
        $("#event9").text(localStorage.getItem("text9")) 


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
});


