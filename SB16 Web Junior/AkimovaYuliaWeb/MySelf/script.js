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
function rnd(){
    return Math.floor(1+Math.random()*10);
}
function sR(num){
    $(".img img").attr("src",`img/${num}.png`)
    qN=num
}
sR(rnd())

$("#t1btn").on("click", function(){
    if($("#t1input").val().toLowerCase()==answ[qN -1]){
        alertify.success("Correct!")
        sR(rnd())
    }
    else{
        alertify.error("Wrong! Try again!")
    }
})