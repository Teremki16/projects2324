$(".slideRules").on("click", function(){
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

function rnd(){
    return Math.floor( 1 + Math.random() * 11);
}

function startREbus(num){
    $(".img img").attr("src", `rebuses/${num}.png`)
    questionNumber = num;
}

startREbus(rnd())

$("#task1btn").on("click" , function(){
    if($("#task1input").val().toLowerCase() == answers[questionNumber - 1]){
     alertify.success("Correct!")
     startREbus(rnd())
    }else{
        alertify.error("Wrong! Try again")
    }
    }
)