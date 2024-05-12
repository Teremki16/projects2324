$(".rules").slideUp(0);

let cards = [
    {
        name: "сэнди",
        img: "https://i.pinimg.com/564x/f4/43/d8/f443d890b41f6d8c8475c895a598337c.jpg",
        id:1 
    },
    {
        name: "спайк",
        img: "https://pikuco.ru/upload/test_stable/abf/abfbec18c2157cb923bd57d194d0cbb9.webp",
        id: 2
    },
    {
        name: "диномайк",
        img: "https://pm1.aminoapps.com/7539/7030adc44ee97efa32a3ae33d9da1521f491abedr1-767-804v2_uhq.jpg",
        id: 3
    },
    {
        name: "лола",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/1579004/pub_61b9af238d149b62f602ea19_61b9bdf873fbf737dd7fe18f/scale_1200",
        id: 4
    },
    {
        name: "манда",
        img: "https://pikuco.ru/upload/test_stable/8c8/8c8d28743815885c8ccdeb5da53a8e4e.webp",
        id: 5
    },
    {
        name: "мэлоди",
        img: "https://static.wikia.nocookie.net/brawlstars/images/b/b1/%D0%9C%D0%B5%D0%BB%D0%BE%D0%B4%D0%B8_Skin-Default.png/revision/latest/smart/width/250/height/250?cb=20240302105252&path-prefix=ru",
        id: 6
    },
    {
        name: "кольт",
        img: "https://kartinki.pics/uploads/posts/2022-03/1646140772_3-kartinkin-net-p-kartinki-bravlerov-iz-bravl-stars-4.jpg",
        id: 7
    },
    {
        name: "чарли",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2uMwOctJ-xaQMk7wLV2rQe2bpJPh7oYaiaTUdDx-KPA&s",
        id: 8
    },
    {
        name: "пайпер",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHiOjD6mOGSkW-EelNrLTFA7ZXYmjp25of2HDqygofw&s",
        id: 9
    },
    {
        name: "честер",
        img: "https://static.wikia.nocookie.net/brawlstars/images/9/90/%D0%A7%D0%B5%D1%81%D1%82%D0%B5%D1%80_Skin-Default.png/revision/latest/smart/width/250/height/250?cb=20221218183256&path-prefix=ru",
        id: 10
    },
    {
        name: "белль",
        img: "https://static.wikia.nocookie.net/brawlstars/images/8/81/%D0%AF%D0%B4%D0%BE%D0%B2%D0%B8%D1%82%D1%8B%D0%B9_%D0%BF%D0%BB%D1%8E%D1%89_%D0%91%D0%B5%D0%BB%D0%BB%D1%8C.png/revision/latest/smart/width/300/height/300?cb=20220303135217&path-prefix=ru",
        id: 11
    },
    {
        name: "фэнг",
        img: "https://i.pinimg.com/736x/11/3a/07/113a076143cac538f717f1dc2b4b29ec.jpg",
        id: 12
    },
]

let was = []


let score = 0;
let time = 300;
let question = 0;
if(localStorage.getItem("time") != null){
    time = parseInt(localStorage.getItem("time"))
}else{
    localStorage.setItem("time", 300);
}

$(".slideRules").on("click", function(){
    $(".rules").slideToggle()
})

function rnd(){
    return Math.floor(Math.random() * 12);
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
    displayInput: true,
    readOnly: true,
    width: 200
});

function startTime(){
    setInterval(function(){
        console.log(time)
        time = parseInt(localStorage.getItem("time"))
        time--;
        $("#time").val(time).trigger("change")
        if(time <= 0){
            alertify.error("time is over");
            setTimeout(()=>window.open("../quiz/task1.html"))
            localStorage.removeItem("time")
        }else if(time > 0){
            localStorage.setItem("time", time)
        }
    }, 1000)
}

$("#start").on("click", ()=>{
    startTime()
    $("#start").css("display", "none")
   
})
