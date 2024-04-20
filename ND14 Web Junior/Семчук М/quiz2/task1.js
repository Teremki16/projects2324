$(".rules").slideUp(0)

let answers = [
    ["гаррі поттер", "harry potter", "hr"],
    ["губка боб", "спандж боб", "sponge bob", "губка"],
    ["пірати корибського моря", "пірати", "джек горобець"],
    ["сімпсони", "simpsons", "the simpson"],
    ["зоряні війни", "star wars"],
    ["король лев", "lion king"],
    ["холодне серце", "frozen"],
    ["шрек"],
    ["шрек"],
    ["роккі"],
    ["індіана джонс"],
    ["один в дома", "один у дома", "сам у дома", "home alone"],
    ["термінатор"],
    ["назад в майбутнє"],
    ["мисливці на привидів"]

];

let was = []

let score = 0;
let time = 300;
if (localStorage.getItem("time") !== null) {
    time = localStorage.getItem("time")
} else {
    localStorage.setItem("time", time)
}

$(".slideRules").on("click", function () {
    $(".rules").slideToggle()
})

function rnd() {
    return Math.floor(1 + Math.random() * 10);
}

$("#progress").knob({
    min: 0,
    max: 10,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    lineCap: "round",
    readOnly: true
});

$("#time").knob({
    min: 0,
    max: 300,
    displayInput: true,
    lineCap: "round",
    readOnly: true,
    width: 150,
});

function startTime() {
    setInterval(function () {
        time = parseInt(localStorage.getItem("time"));
        time--;
        $("#time").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("Time is over");
            setTimeout(() => window.open("../quiz/task1.html"));
            localStorage.removeItem("time");
        } else {
            localStorage.setItem("time", time);
        }
    }, 1000);
}

$("#start").on("click", () => {
    startTime()
    $("#start").css("display", "none")
    $("#audio").css("display", "block")
})