$(".rules").slideUp(0)

let cards = [
    {
        name: "aries",
        img: "https://img.freepik.com/premium-vector/aries-constellation-zodiac-sign-background-cosmic-universe-blue-white-design_484720-4135.jpg",
        id: 1
    },
    {
        name: "taurus",
        img: "https://www.shutterstock.com/shutterstock/videos/1101729197/thumb/10.jpg?ip=x480",
        id: 2
    },
    {
        name: "gemini",
        img: "https://us.123rf.com/450wm/chatun09/chatun092211/chatun09221100137/194410485-gemini-constellation-and-zodiac-sign-on-the-background-of-the-cosmic-universe-blue-and-white-design.jpg?ver=6",
        id: 3
    },
    {
        name: "cancer",
        img: "https://wallpapers.com/images/featured/cancer-zodiac-pictures-651tytejprtrmkrz.jpg",
        id: 4
    },
    {
        name: "leo",
        img: "https://as1.ftcdn.net/v2/jpg/03/35/95/36/1000_F_335953668_X4Uo1yJKNMjGON9LysAYeLlhCtm7O9fl.jpg",
        id: 5
    },
    {
        name: "virgo",
        img: "https://cdn1.vectorstock.com/i/1000x1000/50/65/earth-symbol-of-virgo-zodiac-sign-horoscope-vector-15135065.jpg",
        id: 6
    },
    {
        name: "libra",
        img: "https://m.media-amazon.com/images/I/41wLVS8wTpL._AC_UF1000,1000_QL80_.jpg",
        id: 7
    },
    {
        name: "scorio",
        img: "https://img.freepik.com/premium-vector/scorpio-constellation-zodiac-sign-background-cosmic-universe-blue-white_484720-4138.jpg",
        id: 8
    },
    {
        name: "sagittarius",
        img: "https://m.media-amazon.com/images/I/61WWwgdkY3L._AC_UF1000,1000_QL80_.jpg",
        id: 9
    },
    {
        name: "capricorn",
        img: "https://img.freepik.com/premium-vector/capricorn-constellation-zodiac-sign-background-cosmic-universe-blue-white_484720-4133.jpg",
        id: 10
    },
    {
        name: "aquarius",
        img: "https://i.icanvas.com/MGK7?d=2&sh=v&p=1&bg=g",
        id: 11
    },
    {
        name: "pisces",
        img: "https://m.media-amazon.com/images/I/61giWt9lOdL._AC_UF1000,1000_QL80_.jpg",
        id: 12
    }
]

let firstCard = null;
let secondCard = null;

let score = 0;
let time = 300;

if (localStorage.getItem("time") != null) {
    time = parseInt(localStorage.getItem("time"));
} else {
    localStorage.setItem("time", 300);
}

$(".slideRules").on("click", function () {
    $(".rules").slideToggle();
});

function rnd() {
    return Math.floor(Math.random() * 12);
}

$("#progress").knob({
    min: 0,
    max: 10,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    lineCap: "round",
    readOnly: true,
});

$("#time").knob({
    min: 0,
    max: 300,
    displayInput: true,
    readOnly: true,
    width: 200,
});

function startTime() {
    setInterval(function () {
        time = parseInt(localStorage.getItem("time"));
        time--;
        $("#time").val(time).trigger("change");
        if (time <= 0) {
            alertify.error("Time is over!");
            setTimeout(() => window.open("../quiz2/task1.html"));
            localStorage.removeItem("time");
        } else if (time > 0) {
            localStorage.setItem("time", time);
        }
    }, 1000);
}

$("#start").on("click", () => {
    startTime();
    $("#start").css("display", "none");
    $(".gameBoard").css("display", "grid");
    fillBoard()
});

function fillBoard(){
    let board = [...cards, ...cards]
    board = shuffle(board)
    for(let i = 0; i < board.length; i++){
        let cardHtml = `
            <div class="card" data-id="${board[i].id}">
                <div class="front">ROBOCODE</div>
                <div class="back">
                    <img src="${board[i].img}" alt="${board[i].name}">
                </div>
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
    return array
}

function cardClicked(){
    if(secondCard || $(this).hasClass("matched") || firstCard == $(this)) return
    if(!firstCard){
        firstCard = $(this)
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
            $("#progress").val(score).trigger("change")
            if(score == 12){
                $(".gameBoard").css("display", "none")
                $(".win").css("display", "flex")
                localStorage.removeItem("time")
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

$(document).on("click", ".card", cardClicked)