
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
    console.log(text);
    console.log(time);
    localStorage.setItem(time, text)
});

//repeat this process for each hour
$("#8am").text(localStorage.getItem("8"));


//WHEN I refresh the page, the saved events persist
// step: call the stored variable from local storage