$(".rules").slideUp(0)

let cards = [
    {
        name: "slay orange cat",
        img: "https://catinaflat.blog/wp-content/uploads/2023/01/ginger-cat-facts.jpg",
        id: 1
    },
    {
        name: "plushie cat",
        img: "https://m.media-amazon.com/images/I/41Hbid1GQWL._AC_UF894,1000_QL80_.jpg",
        id: 2
    },
    {
        name: "black haha chorni",
        img: "https://www.webbox.co.uk/wp-content/uploads/2018/10/black_cat_resized.jpg",
        id: 3
    },
    {
        name: "white cat",
        img: "https://www.dailypaws.com/thmb/mYqUKSDMBGAZJtvPwq_FAk1ILVI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-turkish-angora-cat-1200195063-2000-b76590b6c0144f829ad9ae893dcef813.jpg",
        id: 4
    },
    {
        name: "mini tygrik",
        img: "https://www.dailypaws.com/thmb/ZAxASdDac5UDB-xB1X0X5EUV30Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/snow-lynx-bengal-cat-1193590439-2000-35b9dd03611a44c0ba2cd6d66c8ff8d3.jpg",
        id: 5
    },
    {
        name: "oriental",
        img: "https://www.omlet.co.uk/images/cache/375/512/Cat-Oriental_Shorthair_Foreign_White-A_young_pretty_white_Oriental.jpg",
        id: 6
    },
    {
        name: "brown cat",
        img: "https://i.pinimg.com/236x/6a/7a/68/6a7a6834d0385debb63de53f6813aaa2.jpg",
        id: 7
    },
    {
        name: "gray cat",
        img: "https://hips.hearstapps.com/hmg-prod/images/noble-proud-cat-lying-on-window-sill-the-british-royalty-free-image-1658452548.jpg?crop=0.571xw:0.857xh;0.151xw,0.0867xh&resize=980:*",
        id: 8
    },
    {
        name: "cartoon cat",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauHN1Vc3phc5E0xlRSTlJfvB3O9VH-LL0eLJXO46Pfw&s",
        id: 9
    },
    {
        name: "dark gray cat",
        img: "https://lh5.googleusercontent.com/proxy/iAMpE6njlw89Vib-UZkXecLqOOdxy-SScao7nq7NkqW0k9sM5OpgfPSdWEkd3jgZtr3VFRaNVNzaNSVC8fDoHPVGghwtaB-Vd2-JC4WnF4s8MjLw9FgBTcVhW5qa7sx6vX1y3_OkX2J6fWNFtxy9ro53wlM",
        id: 10
    },
    {
        name: "cho eto cat",
        img: "https://cdn.openart.ai/stable_diffusion/d1fe34a4640dea9fb74e37d2b266750f372976d0_2000x2000.webp",
        id: 11
    },
    {
        name: "toy cat",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEC1I_pXfCsjZFVmYS0dSjbTUerihSB3ie0XZCGrNzAg&s",
        id: 12
    }
]

let firstCard = null
let secondCard = null

let score = 0;
let time = 300;

if (localStorage.getItem("time") !== null) {
    time = parseInt(localStorage.getItem("time"));
} else {
    localStorage.setItem("time", 300)
}

$(".slideRules").on("click", function () {
    $(".rules").slideToggle()
})

function rnd(n) {
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
});

$("#time").knob({
    min: 0,
    max: 300,
    displayInput: true,
    lineCap: "round",
    readOnly: true,
    width: 150,
});

function startTime() {
    setInterval(function () {
        time = parseInt(localStorage.getItem("time"));
        time--;
        $("#time").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("Time is over");
            setTimeout(() => window.open("../quiz2/task2.html"));
            localStorage.removeItem("time");
        }else if(time > 0){
            localStorage.setItem("time", time);
        }
    }, 1000);
}

$("#start").on("click", () => {
    startTime()
    $("#start").css("display", "none")
    $(".gameBoard").css("display", "grid")
    fillBoard()
})

function fillBoard(){
    let board = [...cards, ...cards]
    board = shuffle(board)
    for(let i = 0; i < board.length; i++){
        let cardHtml =`
        <div class="card" data-id="${board[i].id}">
                <div class="front">CATS</div>
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