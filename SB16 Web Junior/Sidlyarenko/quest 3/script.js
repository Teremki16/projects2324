$(".slideRules").on("click", function () {
    $(".rules").slideToggle()
})
$(".rules").slideUp(0)
// 123

let cards = [
    {//1
        name: "golubika",
        img: "https://i.pinimg.com/564x/1c/16/84/1c16844055a2faa8eeca157344b85a4e.jpg",
        id: 1
    },
    {//2
        name: "banan",
        img: "https://i.pinimg.com/564x/11/e9/07/11e90753bb249cec54b47e87d3ab95f8.jpg",
        id: 2
    },
    {//3
        name: "arbu",
        img: "https://i.pinimg.com/564x/c6/41/e3/c641e3c51f88436865af2b3d7965e019.jpg",
        id: 3
    },
    {//4
        name: "popka tvoeu mamashu",
        img: "https://i.pinimg.com/564x/53/62/cb/5362cba273545e203bf910410e682b56.jpg",
        id: 4
    },
    {//5
        name: "klubnika",
        img: "https://i.pinimg.com/736x/9e/78/1d/9e781df42cc0ddcf5333b9d13505a12d.jpg",
        id: 5
    },
    {//6
        name: "chereshnya",
        img: "https://i.pinimg.com/564x/fe/ed/39/feed393ca20ee3e14c6795ea0e049cc9.jpg",
        id: 6
    },
    {//7
        name: "vinograd",
        img: "https://i.pinimg.com/736x/3c/95/be/3c95beecd598310be698473fff60d4d4.jpg",
        id: 7
    },
    {//8
        name: "advokat",
        img: "https://i.pinimg.com/564x/4a/81/84/4a81844890c6cf93e21b3ef3200f670b.jpg",
        id: 8
    },
    {//9
        name: "lyamon",
        img: "https://i.pinimg.com/564x/c2/8d/22/c28d223ff18224e5521b6f8348ce537a.jpg",
        id: 9
    },
    {//10
        name: "grice",
        img: "https://i.pinimg.com/564x/ef/91/6f/ef916fa94c5eed05dbdc9b103334bbca.jpg",
        id: 10
    },
    {//11
        name: "kyiv",
        img: "https://i.pinimg.com/564x/8e/89/e1/8e89e1c2a823831d0ad09beaa561f7db.jpg",
        id: 11
    },
    {//12
        name: "malinka",
        img: "https://i.pinimg.com/564x/c4/09/91/c409918add7d49db2bb523a0f46fe5b4.jpg",
        id: 12
    },
]



let ts = localStorage
let time

if (ts.getItem("time") != null) {
    time = parseInt(ts.getItem("time"))
} else {
    time = 300
    ts.setItem("time", 300)
}



let score = 0;


function rnd(n){
    return Math.floor(Math.random()*n)
}


$("#timer").knob({
    min: 0,
    max: 300,
    readOnly: true,
    bgColor: "gray",
    fgColor: "green"
})
$("#score").knob({
    min: 0,
    max: 10,
    angularArc: 60,

    readOnly: true, 
    bgColor: "gray",
    fgColor: "green"
})

function startTimer() {
    setInterval(() => {
        time = parseInt(ts.getItem("time")) - 1;
        $("#timer").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("time is out!")
            setTimeout(() => window.open("index.html", "_self", false), 1000)
            ts.removeItem(time)
        } else if (time > 0) {
            ts.setItem("time", time)
        }
    }, 1000)
}


$("#start").on("click", () => {
    $("#start").css("display", "none")

    startTimer()

})