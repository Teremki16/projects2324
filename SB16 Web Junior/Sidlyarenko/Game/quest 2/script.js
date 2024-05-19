$(".slideRules").on("click", function () {
    $(".rules").slideToggle()
})
$(".rules").slideUp(0)

let answers = [
    ["гаррі поттер", "harry potter","1"],
    ["губка боб", "sponge bob","1"],
    ["пірати карибського моря", "pirates of caribean","1"],
    ["simpsons", "сімсони","1"],
    ["зоряні вінйи", "star wars","1"],
    ["король лев", "king lion","1"],
    ["холодне серце", "frozen heart","1"],
    ["шрек", "shrek","1"],
    ["шрек", "shrek","1"],
    ["rocky", "рокі","1"],
    ["ідіана джонс", "idiana jones","1"],
    ["один в дома", "home alone","1"],
    ["термінатор", "termit","1"],
    ["назад в майбутнє", "back to the future","1"],
    ["мисливці за привидами", "ghost busters","1"],
]

let ts = localStorage
let time

if (ts.getItem("time") != null) {
    time = parseInt(ts.getItem("time"))
} else {
    time = 300
    ts.setItem("time", 300)
}

let questionNumber = 0

let score = 0

let was = []

$("#task1btn").on("click", task)
function rnd() {
    return Math.floor(1 + Math.random() * answers.length)
}

function task() {
    let answer = $("#task1input").val().toLowerCase()
    if (answers[questionNumber - 1].indexOf(answer) != -1) {
        alertify.success("correct!");
        score++;
        $("#score").val(score).trigger("change")
        was.push(questionNumber)
        if (score >= 10) {
            $(".next_bar").css("display", "block")
            $(".audio").css("display", "none")
            $(".answer").css("display", "none")
            localStorage.removeItem("time")
        } else {
            do {
                questionNumber = rnd()
            } while (was.includes(questionNumber))
            startQuiz(questionNumber)
        }
    } else {
        alertify.error("wrong :(")
    }
}


$("#timer").knob({
    min: 0,
    max: 300,
    readOnly: true, //блокуємо таск
    bgColor: "gray",
    fgColor: "green"
})
$("#score").knob({
    min: 0,
    max: 10,
    angularArc: 60,

    readOnly: true, //блокуємо таск
    bgColor: "gray",
    fgColor: "green"
})

function startTimer() {
    setInterval(() => {
        time = parseInt(ts.getItem("time")) - 1;
        $("#timer").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("time is out!")
            setTimeout(() => window.open("../quest 1/index.html", "_self", false), 1000)
            ts.removeItem(time)
        } else if (time > 0) {
            ts.setItem("time", time)
        }
    }, 1000)
}


$("#start").on("click", () => {
    $("#start").css("display", "none")
    $(".sound").css("display", "block")
    startTimer()
    startQuiz(rnd())
})

function startQuiz(number) {
    $("audio").attr("src", `sound/${number}.mp3`)
    questionNumber = number
}