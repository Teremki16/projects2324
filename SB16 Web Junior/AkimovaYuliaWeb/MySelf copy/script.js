$(".sRu").on("click",function(){
    $(".rules").slideToggle();
})

$(".rules").slideUp(0)
let answ=[
    ["harry potter", "гаррі поттер"],
    ["губка боб", "спанж боб","губка боб квадратні портки","spange bob"],
    ["пірати карибського моря","пірати","капітан джек горобець","pirates of the caribbean"],
    ["simpsons", "сімпсони","the simpsons"],
    ["star wars", "старейших війн","старейші війни","star wars","зоряні війни","імперський марш"],
    ["lion king","король лев","сімба"]
    ["frozen","холодне серце"],
    ["shrek","шрек","фіона"],
    ["shrek","шрек","фіона"],
    ["rocky","рокі","сталоне"],
    ["індіана джонс", "indiana jones"],
    ["home alone", "сам вдома", "один дома"],
    ["terminator", "термінатор", "джон конер", "арнольд шварцнегер"],
    ["back to the future", "назад в майбутнє", "марті макфлай"],
    ["ghostbusters", "гостбусти", "мисливці на привидів","ghost busters"],
]

let ts=localStorage
let time
// || ts.getItem("time")!=NaN
if(ts.getItem("time")!=null ){
    time=parseInt(ts.getItem("time"))
}else{
    time=300
    ts.setItem("time",300)
}
let qN=0

let score=0

let was=[]
function rnd(){
    return Math.floor(1+Math.random()*answ.length);
}

$("#t1btn").on("click", task)

$(document).on("keyup",function(e){
    if(e.which==13){
        task()
    }
})

function task(){
    let answer=$("#t1input").val().toLowerCase()
    if(answ[qN-1].indexOf(answer)!=-1){
        alertify.success("Correct")
        score++
        $("#score").val(score).trigger("change")
        was.push(qN)
        if(score>=10){
            $(".next_bar").css("display","block")
            $(".audio").css("display","none")
            $(".answ").css("display","none")
            localStorage.removeItem("time")
            alertify.success("Well done!You win")
        }
        else{
            do{
                qN=rnd()
            }while(was.includes(qN))
            sQ(qN)
        }
}else{
    alertify.error("Wrong! Try again:_(")
}}

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

$("#timer").knob({
    min: 0,
    max: 300,
    readOnly: true,
    bgColor: "gainboro",
    fgColor: "hotpink",
})

function sT(){
    setInterval(()=>{
        time=parseInt(ts.getItem("time"))-1
        $("#timer").val(time).trigger("change")
        if(time<=0){
            alertify.error("Time is over")
            setTimeout(()=>window.open("index.html", "_self", false),1000)
            ts.removeItem("time")
        }else if(time>0){
            ts.setItem("time",time)
        }
    },1000)
}

$("#start").on("click",()=>{
    $("#start").css("display","none")
    $(".sound").css("display","block")
    sT()
    sQ(rnd())
})

function sQ(number){
    $("audio").attr("src","sound/"+number+".mp3")
    qN=number
}