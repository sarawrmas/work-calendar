// display date and time in jumbotron
var displayDate = function() {
    var currentDay = moment().format('MMMM Do YYYY, h:mm a');
    var displayDate = document.querySelector("#currentDay");
    displayDate.textContent = currentDay;
}

// display date on page load
displayDate();

// update time and color tense every 1 minute
setInterval(function () {
    displayDate();
    colorCode();
}, 60000);

// moment.js format to hour, minute, and AM or PM
var format = 'h:mm A'
var currentTime = moment();

var timeArray = [
    {time: moment('08:00', format),
    id: $("#eightDiv")
    },
    {time: moment('09:00', format),
    id: $("#nineDiv")
    },
    {time: moment('10:00', format),
    id: $("#tenDiv")
    },
    {time: moment('11:00', format),
    id: $("#elevenDiv")
    },
    {time: moment('12:00', format),
    id: $("#twelveDiv")
    },
    {time: moment('13:00', format),
    id: $("#oneDiv")
    },
    {time: moment('14:00', format),
    id: $("#twoDiv")
    },
    {time: moment('15:00', format),
    id: $("#threeDiv")
    },
    {time: moment('16:00', format),
    id: $("#fourDiv")
    },
    {time: moment('17:00', format),
    id: $("#fiveDiv")
    },
];

// change color of time slot to represent past/present/future
var colorCode = function() {
    for (var i = 0; i < timeArray.length; i++) {
        if (currentTime.isAfter(timeArray[i].time)) {
            $(timeArray[i].id).addClass("past");
        }
        if (currentTime.isSame(timeArray[i].time, 'hour')) {
            $(timeArray[i].id).addClass("present");
        }
        if (currentTime.isBefore(timeArray[i].time)) {
            $(timeArray[i].id).addClass("future");
        }
    }
}

// display task color on page load
colorCode();

// save items to local storage
$(".saveBtn").click(function() {
    var text = $(this).siblings(".task-edit").val();
    var hour = $(this).siblings(".hour").text();
    localStorage.setItem(hour, text);
})

// access items from local storage and display on page
$(".time-block").each(function() {
    var task = document.querySelector(".task-edit");
    var hour = document.querySelector(".hour").innerHTML;
    var displayTask = localStorage.getItem(hour);
    task.innerHTML = displayTask;
})