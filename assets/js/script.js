var displayDate = function() {
    var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    var displayDate = document.querySelector("#currentDay");
    displayDate.textContent = currentDay;
}

setInterval(function () {
    displayDate();
}, 1000);

var format = 'h:mm A'
var currentTime = moment();

var timeArray = [
    {time: moment('08:00', format),
    id: $("#eightAm")
    },
    {time: moment('09:00', format),
    id: $("#nineAm")
    },
    {time: moment('10:00', format),
    id: $("#tenAm")
    },
    {time: moment('11:00', format),
    id: $("#elevenAm")
    },
    {time: moment('12:00', format),
    id: $("#twelvePm")
    },
    {time: moment('13:00', format),
    id: $("#onePm")
    },
    {time: moment('14:00', format),
    id: $("#twoPm")
    },
    {time: moment('15:00', format),
    id: $("#threePm")
    },
    {time: moment('16:00', format),
    id: $("#fourPm")
    },
    {time: moment('17:00', format),
    id: $("#fivePm")
    },
];

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

$(".task-edit").on("click", function() {
    // get text content
    var text = $(this)
    .text()
    .trim();
    // create textbox
    var userInput = $("<textarea>")
    .val(text);
    // replace task-edit div with newly created textbox
    $(this).replaceWith(userInput);

    // if ($(this).text === $(userInput).text) {
    //     console.log("Yay");
    // }
});

var text = $("#eight").text();

console.log(text);


$("#save-8am").click(function() {
    localStorage.setItem("8 AMtask", JSON.stringify(text));
})