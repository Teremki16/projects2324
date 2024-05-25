$(".rules").slideUp(0)

$(".slideRules").on("click", function () {
    $(".rules").slideToggle()
})
let answers = [
    ["гарі потер", "harry potter"],
    ["губка боб", "sponge bob"],
    ["пірати карибського моря", "harry potter"],
    ["ciмсои", "simpson"],
    ["зоряні війни", "star wars"],
    ["король лев", "lion king"],
    ["холодне серце", "frozen"],
    ["шрек", "shrek"],
    ["шрек", "shrek"],
    ["рокі", "rocky"],
    ["індіано джонс", "indiana jones"],
    ["один дома", "один в дома", "один y дома"],
    ["термінатор", "terminator"],
    ["назад в майбутьне", "back to the future"],
    ["мисливці за привидами", "ghost busters"],
];

let was = []

let score = 0

let time = 300;
let question = 0;
if (localStorage.getItem("time") != null) {
    time = parseInt(localStorage.getItem("time"))
} else {
    localStorage.setItem("time", 300);
}

function rnd() {
    return Math.floor(1 + Math.random() * answers.length)
}

$("#progress").knob({
    min: 0,
    max: 5,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    lineCap: "round",
    readOnly: true
})

$("#time").knob({
    min: 0,
    max: 300,
    displayInput: true,
    readOnly: true,
})


function startTime() {
    setInterval(function () {
        time = parseInt(localStorage.getItem("time"))
        time--;
        $("#time").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("Time is over")
            setTimeout(() => window.open("../quiz/task1.html"));
            localStorage.removeItem("time")
        } else if(time>0){
            localStorage.setItem("time", time)
        }
        
     
    }, 1000)
}

$("#start").on("click", () => {
    startTime()
    $("#start").css("display", "none")
    $("#audio").css("display", "block")
    startQuest(rnd());
})

function startQuest(number) {
    $("audio").attr("src", `sound/${number}.mp3`)
    question = number
}

function quest() {
    let answer = $("#t1input").val().toLowerCase()
    $("#t1input").val("")
    if (answers[question - 1].indexOf(answer) != -1) {
        alertify.success("Correct!")
        score++;
        $("#progress").val(score).trigger("change")
        was.push(question)
        if (score >= 10) {
            $("audio").css("display", "none")
            $(".nextTask").css("display", "block")
            localStorage.removeItem("time")
        } else {
            do {
                question = rnd()
            } while (was.includes(question))
            startQuest(rnd())
        }

    } else {
        alertify.error("Wrong!")
    }
}

$("#t1btn").on("click", quest)

$(document).on("keypress", (e) => {
    if (e.which == 13) quest();
})