$(".slideRules").on("click", function () {
    $(".rules").slideToggle();
});
$(".rules").slideUp(0);

let cards = [
    {
        name: "дуріан",
        img: "https://yesfrukt.com/storage/big/c6fbf55902ac4c744ce3bf5bd7942bbe/product/1/xnedyLDSZYFrctqKBLHQAYnj5tOiKW0q0.png.pagespeed.ic.Ko_8Rvvglh.png",
        id: 1,
    },
    {
        name: "манго",
        img: "https://content1.rozetka.com.ua/goods/images/big/15464138.png",
        id: 2,
    },
    {
        name: "гранат",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV1NrxtEVbUEOsVhUO-eT1nb388Xk_V_f2AvnVdv9Bg&s",
        id: 3,
    },
    {
        name: "авокадо",
        img: "https://flomaster.top/o/uploads/posts/2024-02/1708478355_flomaster-top-p-zelenii-frukt-s-bolshoi-kostochkoi-instagr-3.png",
        id: 4,
    },
    {
        name: "яблуко",
        img: "https://s1.iconbird.com/ico/2013/11/491/w256h2561384698911applered.png",
        id: 5,
    },
    {
        name: "диня",
        img: "https://imgpng.ru/d/melon_PNG14380.png",
        id: 6,
    },
    {
        name: "лайм",
        img: "https://toys-kopitsa.com.ua/image/cache/de849a2fac836fedcbb1d197a844b31b.png",
        id: 7,
    },
    {
        name: "банан",
        img: "https://cdn.pixabay.com/photo/2016/01/17/16/22/bananas-1145121_1280.png",
        id: 8,
    },
    {
        name: "кавун",
        img: "https://amiel.club/uploads/posts/2022-03/1647683674_20-amiel-club-p-kartinki-frukti-po-otdelnosti-26.png",
        id: 9,
    },
    {
        name: "ківі",
        img: "https://images.silpo.ua/products/300x300/webp/94715b5a-996c-44f3-938b-102da2d9f732.png",
        id: 10,
    },
    {
        name: "ананас",
        img: "hhttps://content.rozetka.com.ua/goods/images/big/15464049.png",
        id: 11,
    },
    {
        name: "кокос",
        img: "https://png.pngtree.com/png-clipart/20210912/original/pngtree-tropical-fruit-coconut-png-image_6711665.jpg",
        id: 12,
    },
];

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
    max: 5,
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
            setTimeout(() => window.open("index.html", "_self", false), 1000);
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
});

function fillBoard() {
    let board = [...cards, ...cards];
    for(let i = 0; i < board.length; i++){
        let cardHtml = `
        <div class="card" data-id="${board[i].id}">
        <div class="front">ROBOCODE</div>
        <div class="back"><img src="${board[i].img}" alt="${board[i].name}"></div>
        </div>
        `
        $(".gameBoard").append(cardHtml)
    }
}
fillBoard()
