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
        img: "",
        id: 6
    },
    {
        name: "libra",
        img: "",
        id: 7
    },
    {
        name: "scorio",
        img: "",
        id: 8
    },
    {
        name: "sagittarius",
        img: "",
        id: 9
    },
    {
        name: "capricorn",
        img: "",
        id: 10
    },
    {
        name: "aquarius",
        img: "",
        id: 11
    },
    {
        name: "pisces",
        img: "",
        id: 12
    }
]


let time = 300;

if (localStorage.getItem("time") != null) {
    time = parseInt(localStorage.getItem("time"));
} else {
    localStorage.setItem("time", time)
}

$(".slideRules").on("click", function () {
    $(".rules").slideToggle()
})

function rnd(n) {
    return Math.floor(1 + Math.random() *n);
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
})

function startTime() {
    setInterval(function () {
        time = parseInt(localStorage.getItem("time"));
        time--;
        $("#time").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("Time is over!");
            setTimeout(() => window.open("../quiz/task1.html"))
            localStorage.removeItem("time")
        } else if(time > 0) {
            localStorage.setItem("time", time);
        }
    }, 1000)
}

$("#start").on("click", () => {
    startTime()
    $("#start").css("display", "none")
    $("#audio").css("display", "block")
    startQuest(rnd())
})

