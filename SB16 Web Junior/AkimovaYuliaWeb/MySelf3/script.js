$(".slideRules").on("click",function(){
    $(".rules").slideToggle();
})

$(".rules").slideUp(0)

let card=[
    {
        name:"Кактус",
        img:"https://www.anekdot.ru/i/caricatures/normal/20/9/18/1600450998.jpg",
        id:1,
    },
    {
        name:"Ківі",
        img:"https://i.pinimg.com/564x/74/b0/1e/74b01eaa9b5bd6ec68488d001e3afa70.jpg",
        id:2,
    },
    {
        name:"Птичка",
        img:"https://i.pinimg.com/564x/bc/99/f4/bc99f4c0dcd9be69fb97e91c206ba8a8.jpg",
        id:3,
    },
    {
        name:"Ласка",
        img:"https://i.pinimg.com/564x/c4/bb/31/c4bb31ba56d1bf6ba430dc892c642ef3.jpg",
        id:4,
    },
    {
        name:"москсвинка",
        img:"https://i.pinimg.com/564x/f9/ea/00/f9ea00376c104049bbd59ccc79b0f99e.jpg",
        id:5,
    },
    {
        name:"ааа",
        img:"https://i.pinimg.com/564x/2e/86/35/2e863531d01b748ed6811196e2e0d167.jpg",
        id:6,
    },
    {
        name:"Пт ківі",
        img:"https://i.pinimg.com/564x/26/cf/6f/26cf6f341d495cfaeede7dc02a3e0428.jpg",
        id:7,
    },
    {
        name:"Риба пітушок",
        img:"https://i.pinimg.com/474x/22/18/24/221824d83f9fd80a0f08ec0d2986870e.jpg",
        id:8,
    },
    {
        name:"дракон",
        img:"https://i.pinimg.com/564x/ef/35/3d/ef353d5040e398243f9be7d6b3ce7b7c.jpg",
        id:9,
    },
    {
        name:"лягушка",
        img:"https://i.pinimg.com/474x/f1/d7/ac/f1d7ac84cd3d712dca5278c511a663ca.jpg",
        id:10,
    },
    {
        name:"коот",
        img:"https://i.pinimg.com/564x/aa/ce/d6/aaced6fdf6514555608ff45172f514c9.jpg",
        id:11,
    },
    {
        name:"ида",
        img:"https://i.pinimg.com/564x/a3/71/3b/a3713bfb24373b695e339d9d77f7d682.jpg",
        id:12,
    },
]

let firstCard=null
let secondCard=null

let ts=localStorage
let time
if(ts.getItem("time")!=null ){
    time=parseInt(ts.getItem("time"))
}else{
    time=300
    ts.setItem("time",300)
}

let score=0
function rnd(n){
    return Math.floor(Math.random()*n);
}

$("#score").knob({
    min: 0,
    max: 12,
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

function startTimer(){
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
    $(".gameBoard").css("display","grid")
    startTimer()
    fillBoard()
})

function fillBoard(){
    let board=[...card, ...card]
    board=shuffle(board)
    for(let i=0;i<board.length;i++){
        let cardHtml=`
        <div class="card" data-id="${board[i].id}">
                <div class="front">CHOSE ME</div>
                <div class="back"><img src="${board[i].img}" alt="${board[i].name}"></div>
            </div>
        `
        $(".gameBoard").append(cardHtml)
    }
}

function shuffle(array){
    let counter=array.length
    let temp
    let index
    while(counter>0){
        index=Math.floor(Math.random()*counter)
        counter--
        temp=array[counter]
        array[counter]=array[index]
        array[index]=temp
    }
    return array;
}

function cardClicked(){
    if(secondCard || $(this).hasClass("matched")){return}
    if(!firstCard){
        firstCard=$(this)
        firstCard.addClass("flip")
        return;
    }
    if(firstCard && !$(this).hasClass("flip")){
        secondCard=$(this)
        secondCard.addClass("flip")
        if(firstCard.attr("data-id")==secondCard.attr("data-id")){
            firstCard.addClass("matched")
            secondCard.addClass("matched")
            firstCard=null
            secondCard=null
            score++
            $("#score").val(score).trigger("change")
            if(score==12){
                $("#win").css("display","flex")
                ts.removeItem("time")
            }
        }
    else{
        setTimeout(()=>{
            firstCard.removeClass("flip")
            secondCard.removeClass("flip")
            firstCard=null
            secondCard=null
        },500)
    }
}
    
}
$(document).on("click", ".card",cardClicked)
