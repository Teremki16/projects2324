$(".rules").slideUp(0)

$(".slideRules").on("click", function(){
    $(".rules").slideToggle()
})
let answer=[
    "а-фторсульфо-нилоксиалканперфторкарбонова кислота",
    "свастика",
    "крило",
    "",
     "тангинс",




];

let was =[]

let rebus = 0;

let score = 0

function rnd(){
return Math.floor(1+ Math.random()*10)
}
function startRebus(num){
    $(".img img").attr("src",`rebuses/${num}.png`)
    rebus = num ;
}

startRebus(rnd())

$("#t1btn").on("click", function(){
    let ans = $("#t1input").val().toLowerCase()
    if(ans == answer[rebus - 1]){
        alertify.success("Correct!")
        score++;
        $("#t1input").val("")
        $("#progress").val(score).trigger("change")
        was.push(rebus)
        if(score < 5){
        do{
         rebus = rnd()
        }while(was.includes(rebus))
        startRebus(rebus)
    }
    }else{
        alertify.error("you loser")
    }
})


$("#progress").knob({
 min: 0,
 max:5,
 angleArc:120,
 angleOffset: -60,
displayInput: false ,
lineCap: "round",
readOnly: true
})
