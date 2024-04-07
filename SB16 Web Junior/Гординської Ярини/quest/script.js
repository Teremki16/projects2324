$(".slideRules").on("click", function(){
    $(".rules").slideUp();
})

let answers = [
    "майнкрафт це моє життя",
    "кіт",
    "микита",
    "роблокс",
    "година",
    "порошенко",
    "іч бін дахт",
    "микита їв борщ під вікном",
    "гармонія"
]

let questionNumber = 0;

function rnd(){
    return Math.floor(1 + Math.random() * 9);
}

function startRebus(num){
   $(".img img").attr("src", `resbuses/${num}.png`)
   questionNumber = num;
}

startRebus(rnd())

$("#task1btn").on("click", function(){
    if($("#task1input").val().toLowerCase() == answers[questionNumber - 1]){
        alertify.success("MUAHAHAHAHAHHAHAHAHAHAH")
        startRebus(rnd())
    }else{
        alertify.error("FUUU SDOHNIYU")
    }
})