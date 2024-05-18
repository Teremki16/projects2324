$(".slideRules").on("click", function () {
    $(".rules").slideToggle();
});
$(".rules").slideUp(0);

let cards = [
    {
        name: "неперевершений прокрастінатор",
        img: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/e7/G-man.jpg/274px-G-man.jpg",
        id: 1
    },
    {
        name: "15 годин коду без моргань",
        img: "https://content.okwine.ua/files/product/642c133849f6ceb4e421bb16/350x470/rom-captain-morgan-spiced-gold-35-07l-sklyanka_18.jpg",
        id: 2
    },
    {
        name: "богдан під ліжком",
        img: "https://pm1.aminoapps.com/8402/ea7fe84637879e4b8ff469d23ca2aea81f6ae717r1-575-581v2_uhq.jpg",
        id: 3
    },
    {
        name: "стілець з чаєм",
        img: "https://images.prom.ua/3230227081_w640_h640_alyum-stul-rezhissyorskij.jpg",
        id: 4
    },
    {
        name: "я не знаю",
        img: "https://lh4.googleusercontent.com/proxy/dA25v19NJ0EG-86Pg2tJn8eJNld4KtuZUtIphz8-v1Upoum7oW2Z11nXz2UT2fFKhQuEyQI3nd0AKzwe6Kn0erM_UAWi",
        id: 5
    },
    {
        name: "миша дитина",
        img: "https://images.merstatic.com/imgcache/resized/images/offer/2016/09/01/eb6c8a3c36b6f5874d0b36096ef9ff95.jpg",
        id: 6
    },
    {
        name: "лаптоп",
        img: "https://cdn.comfy.ua/media/catalog/product/7/c/7cd12b688_381762_b.jpg",
        id: 7
    },
    {
        name: "фуррі",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zso8BYV1FWFrVfqpGp8E9iaOTYB4_mod9HzOsifQcA&s",
        id: 8
    },
    {
        name: "санс",
        img: "https://pm1.aminoapps.com/6788/efa2ffaccc9ed63878526ece778bb3e66cee22dav2_hq.jpg",
        id: 9
    },

    {
        name: "мауспад",
        img: "https://www.tradeinn.com/f/13885/138853781/asus-rog-%D0%9D%D0%BE%D0%B6%D0%BD%D1%8B-%D0%9C%D0%B0%D1%83%D1%81%D0%BF%D0%B0%D0%B4.jpg",
        id: 10
    },
    {
        name: "прикольна білка",
        img: "https://pustunchik.ua/uploads/school/cache/4e2e91ec203d6f97db8c1fc3e7203bb4.jpg",
        id: 11
    },
    {
        name: "дівчина дивиться на кмп'ютер 10 годин без сну",
        img: "https://st4.depositphotos.com/2060147/38386/i/450/depositphotos_383867664-stock-photo-woman-student-holds-laptop-her.jpg",
        id: 12
    }

]

let firstCard = null;
let secondCard = null;

let ts = localStorage;
let time;

if (ts.getItem("time") != null) {
    time = parseInt(ts.getItem("time"));
} else {
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

function startTimer() {
    setInterval(() => {
        time = parseInt(ts.getItem("time")) - 1;
        $("#timer").val(time).trigger("change");
        if (time <= 0) {
            alertify.error("Time is out!");
            setTimeout(() => window.open("../quest2/index.html", "_self", false), 1000);
            ts.removeItem("time");
        } else if (time > 0) {
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
    for (let i = 0; i < board.length; i++) {
        let cardHtml = `
    <div class="card" data-id="${board[i].id}">
                <div class="front">youMomHateu</div>
                <div class="back"><img src ="${board[i].img}" alt="${board[i].name}"></div>
        </div>`
        $(".gameBoard").append(cardHtml)

    }

}

function shuffle(array) {
    let counter = array.length
    let temp;
    let index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter)
        counter--;
        temp = array[counter]
        array[counter] = array[index]
        array[index] = temp
    }
    return array;

}

function cardClicked() {
    if (secondCard || $(this).attr("matched")) return
    if (!firstCard) {
        firstCard = $(this)
        firstCard.addClass("flip")
        return;
    }
    if (firstCard && !$(this).hasClass("flip")) {
        secondCard = $(this)
        secondCard.addClass("flip")
        if (firstCard.attr("data-id") == secondCard.attr("data-id")) {
            firstCard.addClass("matched")
            secondCard.addClass("matched")
            firstCard = null
            secondCard = null
            score++;
            $("#score").val(score).trigger("change")
            if(score == 12) {
                $("#win").css("display", "flex")
                ts.removeItem("time")
            }

        } else {
            setTimeout(() => {
                firstCard.removeClass("flip")
                secondCard.removeClass("flip")
                firstCard = null
                secondCard = null
            }, 500)

        }
    }
}



$(document).on("click", ".card", cardClicked)

