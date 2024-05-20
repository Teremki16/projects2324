$(".rules").slideUp(0);

let cards = [
    {
        name: "january",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzPpjyMrLHbGDoLlabuFB_LjDkLc5We47sQ&s",
        id: 1
    },
    {
        name: "february",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKo_q_ioMcfh7t3BRbXc5mTFuQQG1RSbHAw&s",
        id: 2
    },
    {
        name: "march",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNCAut1782XscH1AiyGa5fHy3qWV4IY3E7g&s",
        id: 3
    },
    {
        name: "april",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldvpRuVXWu4azET-RV4Zt6hpSau1n3nWg9g&s",
        id: 4
    },
    {
        name: "may",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGgbSsBuqOVYeKrzD5pBFb5Am5g3b5gwzLg&s",
        id: 5
    },
    {
        name: "june",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXa1wR-A2AV28nfFP0vaCz1MyClhk4v22MkA&s",
        id: 6
    },
    {
        name: "july",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpJYzpJIJYQ1Kb_sGDUv38rfehGFH-Grtjw&s",
        id: 7
    },
    {
        name: "august",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr61DgKx0_57e5dS903q1SEBzBqjUbcTLStQ&s",
        id: 8
    },
    {
        name: "september",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaKrGeofp-iHtPXEHtd41Aw0IQkRjPEGX1A&s",
        id: 9
    },
    {
        name: "october",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxWaPY4Boewm3jHdmvL68j8mxkWGzCoUijQ&s",
        id: 10
    },
    {
        name: "november",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYs1AfEUZgNESXQstlgfF_UGCzKdbCwpcq6A&s",
        id: 11
    },
    {
        name: "december",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OmvcpuUAKu3STYAPVTC_ZKPOcQgOirruKw&s",
        id: 12
    },
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
            score++;
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