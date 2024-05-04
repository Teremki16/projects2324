$(".rules").slideUp(0)

let cards = [
    {
        name: "Кенгуровий щур",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Tasmanian_Bettong_%28female%29.JPG",
        id: 1
    },
    
    {
        name: "Тушканчик",
        img: "https://zoobonus.ua/storage/breeds/images/big/xBLNkH7W5t5Ark5PSg5opJZUhaNnOr71baydQmpz.jpg",
        id: 1
    },
    {
        name: "Хом'як",
        img: "https://goodzoo.com.ua/photos/offers/1fe37b820423011eba054bf09780e3b46.jpg",
        id: 1
    },
    {
        name: "Капібара",
        img: "https://limpopo-zoo.com.ua/wp-content/uploads/2022/06/animal-13-3.jpeg",
        id: 1
    },
    {
        name: "Бобер",
        img: "https://img.novosti-n.org/upload/ukraine/1147805.jpg",
        id: 1
    },
    {
        name: "Вовчок",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Siebenschl%C3%A4fer_Haselnuss.JPG/1200px-Siebenschl%C3%A4fer_Haselnuss.JPG",
        id: 1
    },
    {
        name: "Соня Лісова",
        img: "https://cheline.com.ua/wp-content/uploads/2019/07/32sonya2-e1563891338831.jpg",
        id: 1
    },
    {
        name: "Сирій",
        img: "https://bizslovo.org/content/images/stories/torop2/sonya01.jpg",
        id: 1
    },
    {
        name: "Шиншила",
        img: "https://zaxid.net/resources/photos/news/1200x675_DIR/202112/1533098.jpg?202402164217",
        id: 1
    },
    {
        name: "Ховрах",
        img: "https://pro-cikave.com.ua/wp-content/uploads/2022/06/10670815-2.jpg",
        id: 1
    },
    {
        name: "Білочка",
        img: "https://greenpost.ua/upload/news/2020/07/18/bilka-zag_965x0.jpg?v=1707730659",
        id: 1
    },
    {
        name: "Білка летяга",
        img: "https://ireland.apollo.olxcdn.com/v1/files/97ttc5rqn31x1-UA/image",
        id: 1
    },
    {
        name: "",
        img: "",
        id: 1
    },
    {
        name: "",
        img: "",
        id: 1
    },

]




let score = 0;
let time = 300;
if (localStorage.getItem("time") != null) {
    time = localStorage.setItem("time", time)
}

$(".slideRules").on("click", function () {
    $(".rules").slideToggle()
})

function rnd() {
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
    displayInput: false,
    readOnly: true,
    width: 200
});


function startTime() {
    setInterval(function () {
        time = parseInt(localStorage.getItem("time"))
        time--;
        $("#time").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("Час вийшов!");
            setTimeout(() => window.open("../quiz/task1.html"))
            localStorage.removeItem("time")
        } else {
            localStorage.setItem("time", time)
        }
    }, 1000)
}
$("#start").on("click", () => {
    startTime()
    $("#start").css("display", "none")
})
