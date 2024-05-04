$(".slideRules").on("click", function () {
    $(".rules").slideToggle();
})
$(".rules").slideUp(0);

let cards =[
    {
        name: "папугай кеша",
        img:"https://avatars.dzeninfra.ru/get-zen_doc/9369849/pub_6431a8f407490e6f8d96c569_6431bb54b628cd1a3c8d2ef2/scale_1200",
        id: 1
    },
    {
        name: "кот",
        img:"https://cdn.iz.ru/sites/default/files/news-2024-01/1_4_4.jpg",
        id: 2
        
    },
    {
        name: "index.html",
        img:"https://itproger.com/img/courses/1476977240.jpg",
        id: 3

    },
    {
        name: "банан",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1r45-I-xegqHULouMgBcskyifFZoHbuK5sFdhaYUHg&s",
        id: 4

    },
    {
        name: "script",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        id: 5

    },
    {
        name: "серце",
        img:"https://www.liga.net/images/general/2020/09/29/20200929173341-6915.jpg?v=1601394055",
        id: 6

    },
    {
        name: "собака",
        img:"https://rg.ru/uploads/images/214/34/08/photorep_imageid_538385_8085b70e8b6927e1575618884.jpg",
        id: 7

    },
    {
        name: "хом'як",
        img:"https://tierarzt-karlsruhe-durlach.de/storage/2023/07/hamster-1555083.jpg",
        id: 8

    },
    {
        name: "пістоль",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/FN_Model_1903_002_%28cropped%29.jpg/640px-FN_Model_1903_002_%28cropped%29.jpg",
        id: 9

    },
    {
        name: "скретч",
        img:"https://robx.org/wp-content/uploads/2020/10/scratch_logo.png",
        id: 10

    },
    {
        name: "змія",
        img:"https://www.newacropolis.org.ua/uploads/production/ckeditor/picture/data/650/717/91-/65071791-ef48-4b3c-be61-da9718c3ff38/content.png",
        id: 11

    },
    {
        name: "кот2",
        img:"https://s13.stc.yc.kpcdn.net/share/i/instagram/B44solahwlo/wr-1280.webp",
        id: 12

    },
]



let ts = localStorage
let time;

if (ts.getItem("time") != null) {
    time = parseInt(ts.getItem("time"))
} else {
    time = 300;
    ts.setItem("time", time)

}




let score = 0;



function rnd(n) {
    return Math.floor( Math.random() * n);
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
    fgColor: "lightgreen"
})

$("#timer").knob({
    min: 0,
    max: 300,
    readOnly: true,
    bgColor: "gray",
    fgColor: "lightgreen"
})

function startTimer() {
    setInterval(() => {

        time = parseInt(ts.getItem("time")) - 1;
        $("#timer").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("Time is out !")
            setTimeout(() => window.open("index.html", "_self", false), 1000)
            ts.removeItem("time")
        } else if (time > 0) {
            ts.setItem("time", time)
        }
    }, 1000)
}

$("#start").on("click", () => {
    $("#start").css("display", "none")
    startTimer()

})



