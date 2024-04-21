$(".slideRules").on("click", function(){
    $(".rules").slideToggle()
})
$(".rules").slideUp(0)

let answers = [
    ["гаррі поттер", "harry potter"],
    ["губка боб", "sponge bob"],
    ["пірати карибського моря", "pirates of caribean"],
    ["simpsons", "сімсони"],
    ["зоряні вінйи", "star wars"],
    ["король лев", "king lion"],
    ["холодне серце", "frozen heart"],
    ["шрек", "shrek"],
    ["шрек", "shrek"],
    ["rocky", "рокі"],
    ["ідіана джонс", "idiana jones"],
    ["один в дома", "home alone"],
    ["термінатор", "termit"],
    ["назад в майбутнє", "back to the future"],
    ["мисливці за привидами", "ghost busters"],
]

let ts = localStorage
let time

if(ts.getItem("time") != null){
    time = parseInt(ts.getItem("time"))
}else{
    time = 300
    ts.setItem("time", 300)
}

let questionNumber = 0

let score = 0

let was = []

$("#task1btn").on("click", task)


function task(){
    let answer = $("#task1input").val().toLowerCase()
    if(answers[questionNumber - 1].indexOf(answer) != -1){
        alertify.success("correct!")
        startQuiz(rnd())
    } else{
        alertify.error("wrong :(")
    }
}
function rnd(){
    return Math.floor(1 + Math.random()*answers.length)
}

$("#task1btn").on("click", task)
   
$("#timer").knob({
    min: 0,
    max: 300,
    readOnly: true  , //блокуємо таск
    bgColor: "gray",
    fgColor:"green"
})
$(".taskProgress").knob({
    min: 0,
    max: 300,
    angularArc: 60,
    
    readOnly: true, //блокуємо таск
    bgColor: "gray",
    fgColor:"green"
})

function startTimer(){
    setInterval(()=>{
        time = parseInt(ts.getItem("time")) - 1;
        $("#timer").val(time).trigger("change")
        if( time <=0){
            alertify.error("time is out!")
            setTimeout(()=> window.open("index.html", "_self", false), 1000)
            ts.removeItem(time)
        } else if(time > 0){
        ts.setItem("time", time) 
        }
    }, 1000)
}


$("#start").on("click", ()=>{
    $("#start").css("display", "none")
    $(".sound").css("display", "block")
    startTimer()
    startQuiz(rnd)
})

function startQuiz(number){
    $("audio").attr("src", `sound/${number}.mp3`)
    questionNumber = number
}