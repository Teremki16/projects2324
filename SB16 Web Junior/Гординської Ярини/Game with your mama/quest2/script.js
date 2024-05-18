$(".slideRules").on("click", function () {
    $(".rules").slideToggle();
});
$(".rules").slideUp(0);

let answers = [
    ["гаррі поттер", "harry potter", "рон", "герміона"],
    ["губка боб", "спандж боб", "sponge bob", "губка боб квадратні портки"],
    [
        "пірати карибського моря",
        "пірати",
        "капітан джек горобець",
        "pirates of caribean",
    ],
    ["simpsons", "the simpsons", "сімпсони"],
    ["зоряні війни", "імперський марш", "star wars"],
    ["король лев", "lion king", "сімба"],
    ["холодне серце", "frozen"],
    ["shrek", "шрек", "фіона", "микита"],
    ["shrek", "шрек", "фіона", "микита"],
    ["rocky", "рокі", "сталоне"],
    ["індіана джонс", "indiana jones"],
    ["home alone", "сам вдома", "один дома"],
    ["terminator", "термінатор", "джон конер", "арнольд шварцнегер"],
    ["назад в майбутнє", "back to the future", "марті макфлай"],
    ["мисливці на привидів", "ghostbusters"],
];

let ts = localStorage;
let time;

if (ts.getItem("time") != null) {
    time = parseInt(ts.getItem("time"));
} else {
    time = 300;
    ts.setItem("time", 300);
}

let questionNumber = 0;

let score = 0;

let was = [];

function rnd() {
    return Math.floor(1 + Math.random() * answers.length);
}

$("#task1btn").on("click", task);

$(document).on("keypress", function (e) {
    if (e.which == 13) {
        task();
    }
});

function task() {
    let answer = $("#task1input").val().toLowerCase()
    if(answers[questionNumber - 1].indexOf(answer) != -1){
        alertify.success("Correct!")
        score++;
        $("#score").val(score).trigger("change")
        was.push(questionNumber)
        if(score >= 10){
            $(".next_bar").css("display", "block")
            $(".audio").css("display", "none")
            $(".answer").css("display", "none")
            localStorage.removeItem("time")
        }else {
            do {
                questionNumber = rnd()
            }while(was.includes(questionNumber))
            startQuiz(questionNumber)
        }
    }else {
        alertify.error("Wrong! Try again! :(")
    }
}

$("#score").knob({
    min: 0,
    max: 5,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    lineCap: "round",
    readOnly: true,
    bgColor: "gray",
    fgColor: "lightgreen",
});
$("#timer").knob({
    min: 0,
    max: 300,
    readOnly: true,
    bgColor: "gray",
    fgColor: "lightgreen",
});

function startTimer() {
    setInterval(() => {
        time = parseInt(ts.getItem("time")) - 1;
        $("#timer").val(time).trigger("change");
        if (time <= 0) {
            alertify.error("Time is out!");
            setTimeout(() => window.open("../quest3/index.html", "_self", false), 1000);
            ts.removeItem("time");
        } else if (time > 0){
            ts.setItem("time", time);
        }
    }, 1000);
}

$("#start").on("click", () => {
    $("#start").css("display", "none");
    $(".sound").css("display", "block");
    startTimer();
    startQuiz(rnd())
});

function startQuiz(number){
    $("audio").attr("src", `sound/${number}.mp3`)
    questionNumber = number
}
