$(".rules").slideUp(0)


let cards = [
    {
        name: "Україна",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/270px-Flag_of_Ukraine.svg.png",
        id: 1
    },
    {
        name: "Канада",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png",
        id: 2
    },
    {
        name: "Німеччина",
        img: "https://img.tsn.ua/cached/773/tsn-45ddb1c1da8bc78232f746637fde253d/thumbs/404x202/62/a5/a227b4da53a92ba5e65dcdac5e3fa562.png",
        id: 3
    },
    {
        name: "Фінляндія",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/800px-Flag_of_Finland.svg.png",
        id: 4
    },
    {
        name: "Франція",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/250px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png",
        id: 5
    },
    {
        name: "Італія",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
        id: 6
    },
    {
        name: "Іспанія",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png",
        id: 7
    },
    {
        name: "Японія",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
        id: 8
    },
    {
        name: "Південна Корея",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/250px-Flag_of_South_Korea.svg.png",
        id: 9
    },
    {
        name: "Америка",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_the_U.S..svg/1200px-Flag_of_the_U.S..svg.png",
        id: 10
    },
    {
        name: "Бразилія",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
        id: 11
    },
    {
        name: "Китай",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmdZEhqYvlNeqdgs7NW5NryE6Xua07mpXj9jnSrHux-Q&s",
        id: 12
    }
]


$(".slideRules").on("click", function () {
    $(".rules").slideToggle()
})






let time = 300;


if (localStorage.getItem("time") != null) {
    time = (localStorage.getItem("time"))
} else {
    localStorage.setItem("time", 300)
}



function rnd() {
    return Math.floor(  Math.random() * 12);
}







// $("#t1btn").on("click", function(){
//     let ans = $("#t1input").val().toLowerCase()
//     if(ans == answers[rebus - 1]){
//         alertify.success("Correct!")
//         score++
//         $("#t1input").val("")
//         $("#progress").val(score).trigger("change")
//         was.push(rebus)
//         if (score < 5) {
//         do{
//             rebus = rnd()
//         }while(was.includes(rebus))
//         startRebus(rebus)
//     }else {
//         $(".nextTask").css("display", "block")
//     }
//     }else{
//         alertify.error("Wrong");
//     }
// })

$("#progress").knob({
    min: 0,
    max: 10,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    LineVap: "round",
    readOnly: true

})
$("#time").knob({
    min: 0,
    max: 300,
    displayInput: true,
    readOnly: true,
    width: 200,

})

function startTime() {
    setInterval(function () {
        time = (localStorage.getItem("time"))
        time--;
        $("#time").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("Time is over.")
            setTimeout(() => window.open("../quiz/task1.html"))
            localStorage.removeItem("time");
        } else if(time > 0){
        localStorage.setItem("time", time)
        }
    }, 1000)
}


$("#start").on("click", () => {
    startTime()
    $("#start").css("display", "none")
   
})


