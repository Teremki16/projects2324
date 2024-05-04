$(".rules").slideUp()

let cards = [
    {
        name:"large pencilman",
        img:"https://static.wikia.nocookie.net/dom-studios-skibidi-multiverse/images/5/54/Removal-306_%281%29.png/revision/latest/scale-to-width/360?cb=20240302132453",
        id:1
    },
    {
        name:"large summoner pencilman",
        img:"https://static.wikia.nocookie.net/dom-studios-skibidi-multiverse/images/b/be/Large_Pencilman.png/revision/latest/scale-to-width/360?cb=20240302150356",
        id:2
    },
    {
        name:"regular pencilman",
        img:"https://static.wikia.nocookie.net/dom-studios-skibidi-multiverse/images/7/7b/Normal_Pencilman.png/revision/latest?cb=20240302144700",
        id:3
    },
    {
        name:"C-pen",
        img:"https://static.wikia.nocookie.net/dom-studios-skibidi-multiverse/images/7/7b/Normal_Pencilman.png/revision/latest?cb=20240302144700",
        id:4
    },
    {
        name:"Chief Scientist toilet",
        img:"https://static.wikia.nocookie.net/dom-studios-skibidi-multiverse/images/5/53/Scientist_toilet_3.0.png/revision/latest/thumbnail/width/360/height/360?cb=20240416122456",
        id:5
    },
    {
        name:"G-man toilet 4.0",
        img:"https://static.wikia.nocookie.net/skibidi-toilet-official/images/9/9c/72%2C1-GmanSkibidilbestTransparent.png/revision/latest/smart/width/386/height/259?cb=20240404091649",
        id:6
    },
    {
        name:"aAstro jugernaut",
        img:"https://static.wikia.nocookie.net/skibidi-toilet-official/images/5/50/ChiefTransparent.png/revision/latest/scale-to-width-down/250?cb=20240401142041",
        id:7
    },
    {
        name:"Astro detainer",
        img:"https://static.wikia.nocookie.net/skibidi-toilet-official/images/e/e5/Upgraded_Astro_Toilet.png/revision/latest/scale-to-width-down/250?cb=20240313141521",
        id:8
    },
    {
        name:"UFO toilet",
        img:"https://static.wikia.nocookie.net/skibidi-toilet-official/images/a/a1/AssailantTransparent.png/revision/latest?cb=20240303153138",
        id:9
    },
    {
        name:"Titan Cameraman 3.0",
        img:"https://preview.redd.it/what-the-actual-fuck-is-skibidi-multiverse-plot-v0-4hyci1lux47c1.jpeg?auto=webp&s=f21d448666a9bbb30b0f0dff9aa14fc643ee5ead",
        id:10
    },
    {
        name:"Titan speakerman 3.0",
        img:"https://static.wikia.nocookie.net/skibidi-toilet-fanon-v2/images/0/0d/STMultiverse17RefinedTitanSpeakerman.jpg/revision/latest?cb=20231202004452",
        id:11
    },
    {
        name:"Titan TV man 3.0",
        img:"https://static.wikia.nocookie.net/dom-studios-skibidi-multiverse/images/2/27/TitanTVManThumbnail025.png/revision/latest/scale-to-width-down/250?cb=20240204045907",
        id:12
    },
]

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
            setTimeout(() => window.open("../quiz/task1.html"))
            localStorage.removeItem("time")
        } else if (time > 0) {
            localStorage.setItem("time", time)
        }

    }, 1000)
}

$("#start").on("click", () => {
    startTime()
    $("#start").css("display", "none")
})

