$(".slideRules").on("click", function(){
    $(".rules").slideToggle();
})
$(".rules").slideUp(0);

let answers = [
    "верблюд",
    "зима",
    "пальма",
    "прислів'я",
    "фраза",
    "рибак",
    "віл",
    "вухо",
    "вінок",
    "чат",
    "зебра",
]

let questionNumber = 0
    
function rnd(){
    return Math.floor(1 + Math.random() * 11)
}

function startRebus(num){
    $(".img img").attr("src", `rebuses/${num}.png`)
    questionNumber = num
}

startRebus(rnd())

$("#task1btn").on("click", function(){
    if($("#task1input").val().toLowerCase() == answers[questionNumber - 1]){
        alertify.success("Correct!")
        startRebus(rnd())
    }else{
        alertify.error("Wrong! Try again!")
    }
})
