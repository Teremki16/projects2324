$(".slideRules").on("click", function () {
    $(".rules").slideToggle();
})
$(".rules").slideUp(0);


let answers = [
    "котик",
    "шоколад",
    "банан",
    "собака",
    "папуга",
    "пістолет",
    "пуля",
    "робот",
    "дерево",
    "любов",
    "автомат"

];
let questionNumber = 0;

let score = 0;

let was = []

function rnd() {
    return Math.floor(1 + Math.random() * 11);
}

function startREbus(num) {
    $(".img img").attr("src", `rebuses/${num}.png`)
    questionNumber = num;
}

startREbus(rnd())

$("#task1btn").on("click", rebus )

$(document).on("keypress" , function(e){
    if(e.which == 13)
    rebus();
})
function rebus() {

    if ($("#task1input").val().toLowerCase() == answers[questionNumber - 1]) {
        ("#task1input").val("")
        alertify.success("Correct!")
        score++;
        $("#score").val(score).trigger("change")
        was.push(questionNumber)
        if (score < 5) {
            do {
                questionNumber = rnd()
            } while (was.includes(questionNumber))
            startREbus(questionNumber)
        }else{
            $("#next").css("display" , "block")
            $(".img, .answer").css("display", "none")
        }
    } else {
        alertify.error("Wrong! Try again")
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
    fgColor: "lightgreen"
})