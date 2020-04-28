var NowMoment = moment();
var displayMoment = document.getElementById('currentDay');
displayMoment.innerHTML = NowMoment.format('MMMM Do YYYY, h:mm a');

// when time is after current time, then add class "past"
// when time is before current time, then add class "future"
// if current time === event time, then add class "present"
