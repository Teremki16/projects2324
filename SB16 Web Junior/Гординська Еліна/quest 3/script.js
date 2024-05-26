$(".slideRules").on("click", function(){
    $(".rules").slideToggle();
})
$(".rules").slideUp(0);

let cards = [
    {
        name: "Genshin Impact",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0WYN5-GoCKTsPVlJCWY1k7H9ZxV2ui7eDA&s",
        id: 1
    },
    {
        name: "Roblox",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqAmXcGPaUnoTkqLaiikGjIYXqwse2Q-DmQ&s",
        id: 2
    },
    {
        name: "Brawl Stars",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwheQq8xZM_AWz8C7BUZV_F9YZdceN-m61QA&s",
        id: 3
    },
    {
        name: "Minecraft",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlrMS7riQjXgORhcycgND7EDjMVriP8t9kw&s",
        id: 4
    },
    {
        name: "Dota 2",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1MCFQxI0pJx6K9cX9a_QCMTZx4LlTLuOpw&s",
        id: 5
    },
    {
        name: "Honkai: Star Rail",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrnkc2qKkit17YRSRyvH57cHas_2t5PNAOnw&s",
        id: 6
    },
    {
        name: "Fortnite",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPYWp8jVy9f-iCUF9VIDB5lrvoL5_OunZWQ&s",
        id: 7
    },
    {
        name: "Stumble Guys",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qYxXN9339oq-VPyZa6AWYcatF_75IWdptA&s",
        id: 8
    },
    {
        name: "Plants vs Zombie",
        img: "https://w7.pngwing.com/pngs/402/1002/png-transparent-plants-versus-zombies-logo-plants-vs-zombies-2-it-s-about-time-plants-vs-zombies-garden-warfare-2-plants-vs-zombies-lawnmageddon-plants-vs-zombies-game-food-video-game.png",
        id: 9
    },
    {
        name: "Shadow fight",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPCztKq9-z1fPtiUYN7gKRl1ssCyyB7eSoA&s",
        id: 10
    },
    {
        name: "Fall Guys",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxjYcm6ZVFsi9ncoHbQDVGdQjYZ84Qq6Zgw&s",
        id: 11
    },
    {
        name: "Geometry Dash",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwjTARgBchgao-rB6tpLujFHzHHF0NFcOtA&s",
        id: 12
    },
]

let firstCard = null;
let secondCard = null

let ts = localStorage
let time;

if(ts.getItem("time") !=null){
    time = parseInt(ts.getItem("time"))
}else{
    time = 300;
    ts.setItem("time", time)
}

let score = 0;

function rnd(n){
    return Math.floor(Math.random() * n);
}

$("#score").knob({
    min: 0,
    max: 12,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    lineCap: "round",
    readOnly: true,
    bgColor: "lightgray",
    fgColor: "lightgreen",
})

$("#timer").knob({
    min: 0,
    max: 300,
    readOnly: true,
    bgColor: "lightgray",
    fgColor: "lightgreen",
})

function startTimer(){
    setInterval(()=>{
        time = parseInt(ts.getItem("time")) - 1;
        $("#timer").val(time).trigger("change");
        if(time <= 0){
            alertify.error("Time is out!")
            setTimeout(()=> window.open("index.html", "_self", false), 1000)
            ts.removeItem("time")
        }else  if (time > 0){
            ts.setItem("time", time)
        }
    }, 1000)
}

$("#start").on("click", ()=>{
    $("#start").css("display", "none")
    $(".gameBoard").css("display", "grid")
    startTimer();
    fillBoard()
})

function fillBoard(){
    let board = [...cards,...cards]
    board = shuffle(board)
    for(let i=0;  i < board.length;i++){
        let cardHtml = `
        <div class="card" data-id="${board[i].id}">
                    <div class="front">love</div>
                    <div class="back"><img src="${board[i].img}" alt="${board[i].name}"></div>
                </div>
        `
        $(".gameBoard").append(cardHtml)
    }
}

function shuffle(array){
    let counter = array.length
    let temp;
    let index;
    while(counter > 0){
        index = Math.floor(Math.random() * counter)
        counter--;
        temp = array[counter]
        array[counter] = array[index]
        array[index] = temp
    }
    return array;
}

function cardClicked(){
    if(secondCard || $(this).hasClass("matched")) return;
    if(!firstCard){
        firstCard = $(this)
        firstCard.addClass("flip")
        return;
    }
    if(firstCard && !$(this).hasClass("flip")){
        secondCard  = $(this)
        secondCard.addClass("flip")
        if(firstCard.attr("data-id") == secondCard.attr("data-id")){
            firstCard.addClass("matched")
            secondCard.addClass("matched")
            firstCard = null
            secondCard = null
            score++;
            $("#score").val(score).trigger("change")
            if(score == 12){
                $("#win").css("display", "flex")
                ts.removeItem("time")
            }
        }else{
            setTimeout(()=>{
                firstCard.removeClass("flip")
                secondCard.removeClass("flip")
                firstCard = null
                secondCard = null
            }, 500)
        }
    }
}

$(document).on("click", ".card" , cardClicked)
