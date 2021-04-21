var tasks = {};

var displayToday = function() {
    var currentDay = moment().format('MMMM Do YYYY');
    var displayDate = document.querySelector("#currentDay");
    displayDate.textContent = currentDay;
}

displayToday();

var createTask = function() {
    var newTask = document.createElement("li");

}