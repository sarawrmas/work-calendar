var tasks = {};
var saveBtn = document.querySelector(".col-2 saveBtn");

var displayToday = function() {
    var currentDay = moment().format('MMMM Do YYYY');
    var displayDate = document.querySelector("#currentDay");
    displayDate.textContent = currentDay;
}

displayToday();

$(".task-edit").on("click", function() {
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>")
    .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});