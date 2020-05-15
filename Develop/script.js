
//WHEN I open the planner, the current day is displayed at the top of the calendar

// first set a variable equal to today's date using moment as a reference.
const date = moment().format("MMM DD YYYY");
// then set the text of the #currentDay element to be that variable.
$("#currentDay").text(date);


//WHEN I click into a timeblock, I can enter an event (this is because of the textarea alement in the html)

//WHEN I scroll down, I am presented with timeblocks for standard business hours

//WHEN I view the timeblocks for that day, each timeblock is color coded to indicate whether it is in the past, present, or future
// step: make a function that applies to each element classed time-block that changes their color depending on whether or not its hour has passed.
$(".time-block").each(function() {
    const currentHour = parseInt(moment().format("H"));
    const hour = parseInt($(this).attr("data-hour"));

    if(hour < currentHour){
        $(this).find("textarea").addClass("past")
    } else if(hour > currentHour){
        $(this).find("textarea").addClass("future")
    } else {
        $(this).find("textarea").addClass("present");
    }
});


//WHEN I click the save button for that timeblock, the text for that event is saved in local storage
// we already have save button elements, so we need to make them push the content of the div's text box to localstorage
// step: create a function that writes the content of the <textarea> tag in the current div to localstorage. create a placeholder variable?
$(".saveBtn").on("click", function() {
    var time = $(this).parent().attr('data-hour');
    var text = $(this).siblings('textarea').val();
    localStorage.setItem(time, text)
});

//repeat this process for each hour
$("#8am").text(localStorage.getItem("8"));
$("#9am").text(localStorage.getItem("9"));
$("#10am").text(localStorage.getItem("10"));
$("#11am").text(localStorage.getItem("11"));
$("#12pm").text(localStorage.getItem("12"));
$("#1pm").text(localStorage.getItem("13"));
$("#2pm").text(localStorage.getItem("14"));
$("#3pm").text(localStorage.getItem("15"));
$("#4pm").text(localStorage.getItem("16"));
$("#5pm").text(localStorage.getItem("17"));
$("#6pm").text(localStorage.getItem("18"));
$("#7pm").text(localStorage.getItem("19"));
$("#8pm").text(localStorage.getItem("20"));
$("#9pm").text(localStorage.getItem("21"));
$("#10pm").text(localStorage.getItem("22"));
$("#11pm").text(localStorage.getItem("23"));
$("#12am").text(localStorage.getItem("24"));
$("#1am").text(localStorage.getItem("1"));
$("#2am").text(localStorage.getItem("2"));
$("#3am").text(localStorage.getItem("3"));
$("#4am").text(localStorage.getItem("4"));
$("#5am").text(localStorage.getItem("5"));
$("#6am").text(localStorage.getItem("6"));
$("#7am").text(localStorage.getItem("7"));


//WHEN I refresh the page, the saved events persist
// step: call the stored variable from local storage