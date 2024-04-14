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

let score = 0

let was = []

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
        $("#task1input").val("")
        alertify.success("Correct!")
        score++
        $("#score").val(score).trigger("change")
        was.push(questionNumber)
        if(score < 5){
        do{
            questionNumber = rnd()
        }while(was.includes(questionNumber))
        startRebus(questionNumber)
    }else{
        $("#next").css("display", "block")
        $(".img, .answer").css("display", "none")
    }
    }else{
            alertify.error("Wrong! Try again")
        }
        
        })

$("#score").knob({
    min: 0,
    max: 5,
    angleArc: 120,
    angleOffset: -60,
    dislpayInput: false,
    lineCap: "round",
    readOnly: true, //блокуємо таск
    bgColor: "gray",
    fgColor:"green"
})