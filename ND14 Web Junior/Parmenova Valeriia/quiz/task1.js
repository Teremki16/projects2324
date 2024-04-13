$(".rules").slideUp(0)

let answers = [
    "яблоко",
    "груша",
    "город",
    "школа",
    "сайт",
    "браузер",
    "плагін",
    "колір",
    "стиль",
    "язик",
    "візерунок",
    "сорока"
]

let was = []

let rebus = 0;

let score = 0;

$(".slideRules").on("click", function () {
    $(".rules").slideToggle()
})

function rnd() {
    return Math.floor(1 + Math.random() * 12);
}

function startRebus(num) {
    $(".img img").attr("src", `rebuses/${num}.jpg`)
    rebus = num
}

startRebus(rnd())

$("#t1btn").on("click", function () {
    let ans = $("#t1input").val().toLowerCase()
    if (ans == answers[rebus - 1]) {
        alertify.success("Правильно!")
        score++
        $("#t1input").val("")
        $("#progress").val(score).trigger("change")
        was.push(rebus);
        if (score < 5) {
            do {
                rebus = rnd()
            } while (was.includes(rebus))
            startRebus(rebus)
        } else{
            $(".nextTask").css("display", "block")
        }
    } else {
        alertify.error("Неправильно! Спробуй ще!");
    }
})

$("#progress").knob({
    min: 0,
    max: 5,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    lineCap: "round",
    readOnly: true
})

