$(".slideRules").on("click", function(){
    $(".rules").slideToggle();
})
$(".rules").slideUp(0);

let answers = [
    ["harry potter", "гаррі поттер"],
    ["sponge bob", "губка боб", "спандж боб", "губка боб квадратні штани"],
    ["pirates of the caribbean", "пірати карибського моря", "пірати"],
    ["simpsons", "сімпсони"],
    ["зоряні війни", "імперський марш"],
    ["король лев", "lion king"],
    ["холодне серце", "frozen"],
    ["shrek", "шрек", "фіона"],
    ["shrek", "шрек", "фіона"],
    ["rocky", "роккі", "сталоне", "рокі"],
    ["indiana jones", "індіана джонс"],
    ["home alone", "сам удома"],
    ["terminator", "термінатор"],
    ["назад в майбутнє", "back to the future"],
    ["ghostbusters", "мисливці на привидів"]
]

let ts = localStorage
let time;

if(ts.getItem("time") !=null){
    time = parseInt(ts.getItem("time"))
}else{
    time = 300;
    ts.setItem("time", time)
}

let questionNumber = 0

let score = 0;

let was = []
    
function rnd(){
    return Math.floor(1 + Math.random() * answers.length);
}

$("#task1btn").on("click", task)

$(document).on("keypress", function(e){
    if(e.which == 13){
        task();
    }
})

function task(){
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
            do{
                questionNumber = rnd()
            }while(was.includes(questionNumber))
            console.log(was)
            startQuiz(questionNumber)
        }
    } else {
        alertify.error("Wrong! Try again!🚗")
    }
}

$("#score").knob({
    min: 0,
    max: 10,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    lineCap: "round",
    readOnly: true,
    bgColor: "lightgray",
    fgColor: "lightgreen",
})

$("#timer").knob({
    min: 0,
    max: 300,
    readOnly: true,
    bgColor: "lightgray",
    fgColor: "lightgreen",
})

function startTimer(){
    setInterval(()=>{
        time = parseInt(ts.getItem("time")) - 1;
        $("#timer").val(time).trigger("change");
        if(time <= 0){
            alertify.error("Time is out!")
            setTimeout(()=> window.open("index.html", "_self", false), 1000)
            ts.removeItem("time")
        }else  if (time > 0){
            ts.setItem("time", time)
        }
    }, 1000)
}

$("#start").on("click", ()=>{
    $("#start").css("display", "none")
    $(".sound").css("display", "block")
    startTimer();
    startQuiz(rnd())
})

function startQuiz(number){
    $("audio").attr("src", `sound/${number}.mp3`)
    questionNumber = number;
}
