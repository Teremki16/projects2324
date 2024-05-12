$(".slideRules").on("click", function () {
    $(".rules").slideToggle();
});
$(".rules").slideUp(0);

let cards = [
    {
        name: "adolf",
        img: "https://cdn.britannica.com/58/129958-050-C3FE2DD2/Adolf-Hitler-1933.jpg",
        id: 1
    },
    {
        name: "mazepa",
        img: "https://wjc-dev.imgix.net/about-holocaust/assets/r6-eCZTG/756326-1024x741.jpg?auto=format&fit=crop&fm=jpg&h=480&lossless=true&q=60&w=750",
        id: 2
    },
    {
        name: "stalin",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuAqX4bSR7vGPPzkKsWKLqiFN4G9kmQBsB7_3eDBMwA&s",
        id: 3
    },
    {
        name: "white",
        img: "https://pyxis.nymag.com/v1/imgs/96b/208/c7ed223ed7d8cf15a6e161cb1a3f394af8-21-human-centipede-1.rsquare.w400.jpg",
        id: 4
    },
    {
        name: "nigga",
        img: "https://i1.sndcdn.com/artworks-ZbYDSrDY0wDhXYbO-K41m4g-t500x500.jpg",
        id: 5
    },
    {
        name: "arizona boy",
        img: "https://i.ytimg.com/vi/iQPq68mP-t8/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHOBYAC0AWKAgwIABABGFUgcigRMA8=&rs=AOn4CLDgiBvZlXXJzLDF5w9SWRTOIoiVAA",
        id: 6
    },
    {
        name: "azov",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/AZOV_logo.svg/800px-AZOV_logo.svg.png",
        id: 7
    },
    {
        name: "belarus",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKVjWQRVxWq3u5yPc6uuoyk1Ov3uMKAykD78gySH9Fw&s",
        id: 8
    },
    {
        name: "album",
        img: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/91/00/0b/91000bd4-ab24-2011-25f8-03ef7e2f5442/7071245098308.png/486x486bb.png",
        id: 9
    },
    {
        name: "rich amiri",
        img: "https://www.livenation.com/_next/image?url=https%3A%2F%2Fs1.ticketm.net%2Fdam%2Fa%2Fe24%2F7307a1bb-ef46-474a-b84a-9822c1f5ae24_RETINA_PORTRAIT_16_9.jpg&w=1319&q=70",   
        id: 10
    },
    {
        name: "sec nigga",
        img: "https://d3ffkb7uf3bq3r.cloudfront.net/user/c096b695-c28e-474a-9960-dce17dfaacd4/avatar-9bbd2ae9-c374-4049-ac53-fce56641add2-original.jpg?v=63866612095&width=1024",
        id: 11
    },
    {
        name: "third nigga",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbrNXk-Geu0LHN7dzvLtP8gn0DBDTQdR2qHryUEaQFQ&s",
        id: 12
    }
]

let firstCard = null;
let secondCard = null;

let ts = localStorage;
let time;

if(ts.getItem("time") != null){
    time = parseInt(ts.getItem("time"));
}else {
    time = 300;
    ts.setItem("time", 300);
}

let score = 0;

function rnd(n) {
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
    bgColor: "gray",
    fgColor: "lightgreen",
});
$("#timer").knob({
    min: 0,
    max: 300,
    readOnly: true,
    bgColor: "gray",
    fgColor: "lightgreen",
});

function startTimer(){
    setInterval(()=>{
        time = parseInt(ts.getItem("time")) -1;
        $("#timer").val(time).trigger("change")
        if( time <=0 ){
            alertify.error("Time is out!")
            setTimeout(()=> window.open("index.html", "_self", false), 1000);
            ts.removeItem("time")
        }else if (time > 0){
        ts.setItem("time", time);
        }
    }, 1000);
}

$("#start").on("click", () => {
    $("#start").css("display", "none");
    $(".gameBoard").css("display", "grid");
    startTimer();
    fillBoard()
});

function fillBoard() {
    let board = [...cards, ...cards];
    board = shuffle(board)
    for(let i = 0; i < board.length; i++){
        let cardHtml = `
        <div class="card" data-id="${board[i].id}">
                    <div class="front">ROBOCODE</div>
                    <div class="back"><img src="${board[i].img}"alt="${board[i].name}">yung lean</div>
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
        secondCard = $(this)
        secondCard.addClass("flip")
        if(firstCard.attr("data-id") == secondCard.attr("data-id")){
            firstCard.addClass("matched")
            secondCard.addClass("matched")
            firstCard = null
            secondCard = null
            $("#score").val(score).trigger("change")
            if(score == 12) {
                $("#win").css("display", "flex")
                ts.removeItem("time")
            }
        }else{
            setTimeout(()=>{
                firstCard.removeClass("flip")
                secondCard.removeClass("flip")
                firstCard = null
                secondCard = null
                score ++;
            }, 500)
        }
    }
}
$(document).on("click", ".card", cardClicked)