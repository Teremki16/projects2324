$(".rules").slideUp(0)



$(".slideRules").on("click", function () {
    $(".rules").slideToggle()
})

let answers = [
    ["гаррі поттер", "harry potter"],
    ["губка боб", "sponge bob"],
    ["пірати карибського моря"],
    ["сімпсони"],
    ["зоряні війни"],
    ["король лев"],
    ["холодне серце"],
    ["шрек", "шрек"],
    ["роккі"],
    ["індіана джонс"],
    ["один у дома"],
    ["термінатор"],
    ["назад у майбутнє"],
    ["мисливці на привидів"]

];

let was = []

let score = 0;
let time = 300;

let question = 0

if (localStorage.getItem("time") != null) {
    time = (localStorage.getItem("time"))
} else {
    localStorage.setItem("time", 300)
}



function rnd() {
    return Math.floor(1 + Math.random() * answers.length);
}

function startRebus(num) {
    $(".img img").attr("src", `rebuses/${num}.png`)
    rebus = num;
}

startRebus(rnd())



// $("#t1btn").on("click", function(){
//     let ans = $("#t1input").val().toLowerCase()
//     if(ans == answers[rebus - 1]){
//         alertify.success("Correct!")
//         score++
//         $("#t1input").val("")
//         $("#progress").val(score).trigger("change")
//         was.push(rebus)
//         if (score < 5) {
//         do{
//             rebus = rnd()
//         }while(was.includes(rebus))
//         startRebus(rebus)
//     }else {
//         $(".nextTask").css("display", "block")
//     }
//     }else{
//         alertify.error("Wrong");
//     }
// })

$("#progress").knob({
    min: 0,
    max: 10,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    LineVap: "round",
    readOnly: true

})
$("#time").knob({
    min: 0,
    max: 300,
    displayInput: true,
    readOnly: true,
    width: 200,

})

function startTime() {
    setInterval(function () {
        time = (localStorage.getItem("time"))
        time--;
        $("#time").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("Time is over.")
            setTimeout(() => window.open("../quiz/task1.html"))
            localStorage.removeItem("time");
        } else if(time > 0){
        localStorage.setItem("time", time)
        }
    }, 1000)
}


$("#start").on("click", () => {
    startTime()
    $("#start").css("display", "none")
    $("audio").css("display", "block")
    startQuest(rnd())
})

function startQuest(number) {
    $("audio").attr("src", `sound/${number}.mp3`)
    question = number
}

function quest() {
    let answer = $("#t1input").val().toLowerCase();
    $("#t1input").val("")
    if (answers[question - 1].indexOf(answer) != -1) {
        alertify.success("Correct!")
        score++;
        $("#progress").val(score).trigger("change")
        was.push(question)
        if(score >= 10){
            $("audio").css("display", "block")
            $(".nextTask").css("display", "block")
            localStorage.removeItem("time")
        }
        do{

        }while(was.includes(question))
        startQuest(rnd())
    }
    else {
        alertify.error("Wrong!")
    }

}

$("#t1btn").on("click", quest)

$(document).on("keypress", (e) => {
    if (e.which == 13) quest()
})