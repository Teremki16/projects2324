$(".rules").slideUp(0);

let answers = [
    ["гаррі поттер", "harry potter", "гарі потер", "хлопчик в окулярах"],
    ["спандж боб", "sponge bob", "губка боб"],
    ["пірати карибського моря", "пірати", " капітан джек горобець", "pirates", "pirates of karibian sea", "капітан джек спароу"],
    ["simpsons", "сімсони"],
    ["зоряні війни", "я твій батько", "star wars"],
    ["lion king", "король лев", "сімба"],
    ["холодне серце", "frozen", "ельза"],
    ["шрек", "shrek"],
    ["шрек", "shrek"],
    ["роккі", "rokki"],
    ["індіана джонс", "indiana jones"],
    ["home alone", "один вдома", "один у дома"],
    ["термінатор", "terminator"],
    ["back to future", "назад у майбутнє"],
    ["мисливці на привидів", "ghost busters"],
];

let was = [];



let score = 0;

let time = 300
let question;
if (localStorage.getItem("time") != null) {
    time = parseInt(localStorage.getItem("time"));
} else {
    localStorage.setItem("time", 300)
}

$(".slideRules").on("click", function () {
    $(".rules").slideToggle();
});

function rnd() {
    return Math.floor(1 + Math.random() * answers.length);
}



$("#progress").knob({
    min: 0,
    max: 10,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    lineCap: "round",
    readOnly: true,
});

$("#time").knob({
    min: 0,
    max: 300,
    displayInput: true,
    readOnly: true,
    width: 150,
});

function startTime() {
    setInterval(function () {
        time = parseInt(localStorage.getItem("time"))
        time--;
        $("#time").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("Ти все проспав")
            setTimeout(() => window.open("../quiz/task1.html"))
            localStorage.removeItem("time")
        } else if(time>0) {

            localStorage.setItem("time", time)
        }
    }, 1000)
}

$("#start").on("click", () => {
    startTime()
    $("#start").css("display", "none")
    $("#audio").css("display", "block")
    startQuest(rnd())
})

function startQuest(number) {
    $("audio").attr("src", `sound/${number}.mp3`)
    question = number
    console.log(answers[number - 1])
}

function Quest() {
    let answer = $("#t1input").val().toLowerCase()
    $("#t1input").val("")
    if (answers[question - 1].indexOf(answer) != -1) {
        alertify.success("Correct!")
        score++
        $("#progress").val(score).trigger("change")
        was.push(question)
        if(score>= 10){
            $("audio").css("display", "none")
            $(".nextTask").css("display", "block")
            localStorage.removeItem("time")
        }else{
            do{
question = rnd()
        }while(was.includes(question))
        startQuest(question)
        }
        
    } else {
        alertify.error("Wrong!")
    }
}

$("#t1btn").on("click", Quest)

$(document).on("keypress", (e) => {
    if (e.which == 13) Quest;
})