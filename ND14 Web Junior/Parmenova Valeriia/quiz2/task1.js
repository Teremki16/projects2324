$(".rules").slideUp(0)

let answers = [
    ["гаррі поттер", "гарі потер", "harry potter", "hary poter"],
    ["губка боб", "спанч боб"],
    ["пірати карибського моря", "щось про піратів", "пірати"],
    ["сімпсони", "simpsons"],
    ["зоряні війни", "star wars"],
    ["король лев"],
    ["холодне серце"],
    ["шрек"],
    ["шрек"],
    ["роккі"],
    ["індіана джонс"],
    ["один вдома"],
    ["термінатор"],
    ["назад в майбутнє"],
    ["мисливці на привидів"],

]

let was = []

let score = 0;
let time = 300;
if(localStorage.getItem("time") != null){
    time = localStorage.setItem("time", time)
}

$(".slideRules").on("click", function () {
    $(".rules").slideToggle()
})

function rnd() {
    return Math.floor(1 + Math.random() * 12);
}

$("#progress").knob({
    min: 0,
    max: 10,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    lineCap: "round",
    readOnly: true
})


$("#time").knob({
    min: 0,
    max: 300,
    displayInput: false,
    readOnly: true,
    width: 200
});


function startTime(){
    setInterval(function(){
        time = parseInt(localStorage.getItem("time"))
        time--;
        $("#time").val(time).trigger("change")
        if(time <= 0){
            alertify.error("Час вийшов!");
            setTimeout(()=>window.open("../quiz/task1.html"))
            localStorage.removeItem("time")
        }else{
            localStorage.setItem("time",time)
        }
    },1000)
}
$("#start").on("click", ()=>{
    startTime()
    $("#start").css("display","none")
    $("#audio").css("display", "block")
})