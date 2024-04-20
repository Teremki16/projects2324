$(".rules").slideUp(0)

let answers = [
    ["гаррі поттер", "harry poter", "harry", "potter"],
    ["губка боб", "sponge bob", "sponge", "губка", "bob"],
    ["джек воробей", "пірати"],
    ["сімпсониб", "симсоны", "simpson"],
    ["зоряні війни","star wars"],
    ["король лев","lion king"],
    ["холодне серце","frozen"],
    ["шрек","shrek"],
    ["шрек","shrek"],
    ["роккі","rocky"],
    ["індіана джонс","indiana jones"],
    ["один вдома","home alone"],
    ["термінатор","terminator"],
    ["назад у майбутнє","back to the future"],
    ["мисливці на привдів","ghost busters"],
]

let was = []


let score = 0;
let time = 300;
if(localStorage.getItem("time") != null){
    time = parseInt(localStorage.getItem("time"))
}else{
    localStorage.setItem("time", time)
}

$(".slideRules").on("click", function(){
    $(".rules").slideToggle()
})

function rnd(){
    return Math.floor(1+Math.random() * 12);
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
    displayInput: true,
    readOnly: true,
    width: 200
});

function startTime(){
    setInterval(function(){
        console.log(time)
        time = parseInt(localStorage.getItem("time"))
        time--;
        $("#time").val(time).trigger("change")
        if(time <= 0){
            alertify.error("time is over");
            setTimeout(()=>window.open("../quiz/task1.html"))
            localStorage.removeItem("time")
        }else{
            localStorage.setItem("time", time)
        }
    }, 1000)
}

$("#start").on("click", ()=>{
    startTime()
    $("#start").css("display", "none")
    $("#audio").css("display", "block")
})