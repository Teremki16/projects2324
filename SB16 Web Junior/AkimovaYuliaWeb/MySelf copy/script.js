$(".sR").on("click",function(){
    $(".rules").slideToggle();
})

$(".rules").slideUp(0)
let answ=[
    "хто",
    "музей",
    "патріот",
    "кохати",
    "скалалаз",
    "телефон",
    "стіл",
    "браузер",
    "байдикувати",
    "примарний",
]
let qN=0

let score=0

let was=[]
function rnd(){
    return Math.floor(1+Math.random()*10);
}
function sR(num){
    $(".img img").attr("src",`img/${num}.png`)
    qN=num
}
sR(rnd())

$("#t1btn").on("click", rebus)

$(document).on("keyup",function(e){
    if(e.which==13){
        rebus()
    }
})
function rebus(){
    if($("#t1input").val().toLowerCase()==answ[qN -1]){
        $("#t1input").val("")
        alertify.success("Correct!")
        score++
        $("#score").val(score).trigger("change")
        was.push(qN)
        if(score<5){
        do{
            qN=rnd()
        }while(was.includes(qN))
        sR(qN)
    }else{
        $("#next").css("display","block")
        $(".img, .answ").css("display","none")
    }}else{
        alertify.error("Wrong! Try again!")
    }
}

$("#score").knob({
    min: 0,
    max: 5,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    lineCap: "round",
    readOnly: true,
    bgColor: "gainboro",
    fgColor: "hotpink",
})