$(".slideRules").on("click", function(){
    $(".rules").slideToggle()
})
$(".rules").slideUp(0)

let answers = [
    "скрипт",
    "сайт",
    "програміст",
    "микита",
    "україна",
    "математика",
    "відеокарта",
    "функція",
    "мова",
    "шо, думав в казку потрапив??"
]

let questionNumber = 0

function rnd(){
    return Math.floor(1 + Math.random()*10)
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
            alertify.error("Wrong! Try again")
        }
        
        })