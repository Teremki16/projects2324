$(".rules").slideUp()

let cards = [
    {
        name:"large pencilman",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsty0kEFYKs7FKtm0rPmcz1irojltM5QK6p_IwEufTw&s",
        id:1
    },
    {
        name:"large summoner pencilman",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsPuPJxS5kLIGEDFKpXn6hGgxn1wyxNArLE7bsxSoyg4Hppds1E_QjsIKyvD9aVoquqA&usqp=CAU",
        id:2
    },
    {
        name:"regular pencilman",
        img:"https://i.ytimg.com/vi/BPdM5dH3PoE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBHDZ4gUa1quOWahdvmn6KHndBIvQ",
        id:3
    },
    {
        name:"C-pen",
        img:"https://i.ytimg.com/vi/PfZ_itZgGyI/hqdefault.jpg?v=662e2810",
        id:4
    },
    {
        name:"Chief Scientist toilet",
        img:"https://i.ytimg.com/vi/8P6TTc_VZLQ/maxresdefault.jpg",
        id:5
    },
    {
        name:"G-man toilet 4.0",
        img:"https://preview.redd.it/72-is-one-of-the-best-episodes-v0-0n557fd22jpc1.jpeg?width=640&crop=smart&auto=webp&s=925f1461b3e453a3fc6b8a1e7aea1f0f2aa3e2f7",
        id:6
    },
    {
        name:"Astro jugernaut",
        img:"https://i.ytimg.com/vi/_7mTFtFJojw/hqdefault.jpg",
        id:7
    },
    {
        name:"Astro detainer",
        img:"https://preview.redd.it/if-dafuqboom-makes-a-troll-leak-about-ep-72-part-2-what-do-v0-7v933uua0zpc1.jpg?width=640&crop=smart&auto=webp&s=e41e119c1a065eaa1b47efba665e1b532612bc9f",
        id:8
    },
    {
        name:"UFO toilet",
        img:"https://i.ytimg.com/vi/vIOqFFXPh10/maxresdefault.jpg",
        id:9
    },
    {
        name:"Titan Cameraman 3.0",
        img:"https://preview.redd.it/what-the-actual-fuck-is-skibidi-multiverse-plot-v0-4hyci1lux47c1.jpeg?auto=webp&s=f21d448666a9bbb30b0f0dff9aa14fc643ee5ead",
        id:10
    },
    {
        name:"Titan speakerman 3.0",
        img:"https://i.ytimg.com/vi/o6Nf2Sa5vcA/maxresdefault.jpg",
        id:11
    },
    {
        name:"Titan TV man 3.0",
        img:"https://i.ytimg.com/vi/q7UkHxqxARA/hqdefault.jpg?v=65be14b8",
        id:12
    },
]

let firstCard = null

let secondCard = null

let score = 0;
let time = 300
if (localStorage.getItem("time") != null) {
    time = localStorage.getItem("time")
} else {
    localStorage.setItem("time", 300)
}

$(".slideRules").on("click", function () {
    $(".rules").slideToggle()
})

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
    readOnly: true

})
$("#time").knob({
    min: 0,
    max: 300,
    displayInput: false,
    readOnly: true,
    width: 100
})


function startTime() {
    setInterval(function () {
        time = parseInt(localStorage.getItem("time"))
        time--;
        $("#time").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("Time is gone!");
            setTimeout(() => window.open("../quiz2/task1.html"))
            localStorage.removeItem("time")
        } else if (time > 0) {
            localStorage.setItem("time", time)
        }

    }, 1000)
}

$("#start").on("click", () => {
    startTime()
    $("#start").css("display", "none")
    $(".gameBoard").css("display", "grid")
    fillBoard()
})

function fillBoard(){
    let board = [...cards,...cards]
    board = shuffle(board)
    for(let i = 0; i < board.length; i++){
        let cardHtml =`
        <div class="card" data-id="${board[i].id}">
            <div class="front">fools</div>
            <div class="back">
                <img src="${board[i].img}" alt="${board[i].name}">
            </div>
        </div>
        `
        $(".gameBoard").append(cardHtml)
    }
}



function shuffle(array){
    let counter = array.length;
    let temp;
    let index;
    while(counter > 0){
        index = Math.floor(Math.random() * counter)
        counter--;
        temp = array[counter]
        array [counter]= array[index]
        array [index] = temp

    }
    return array
}

function cardClicker(){
    if(secondCard || $(this).hasClass("matched") || firstCard == $(this)) return
    if(!firstCard){
        firstCard  = $(this)
        firstCard.addClass("flip")
        return
    }
    if(firstCard){
    secondCard = $(this)
    secondCard.addClass("flip")
    if(firstCard.attr("data-id") == secondCard.attr("data-id")){
        firstCard.addClass("matched")
        secondCard.addClass("matched")
        firstCard = null
        secondCard = null
        score++
        $("#progress").val(score).trigger("change")
        if(score==12){
            $(".gameBoard").css("display","none")
            $(".win").css("display","flex")
            localStorage.removeItem("time")
            

        }
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


$(document).on("click",".card",cardClicker)


