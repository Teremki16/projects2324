$(".rules").slideUp(0);

let cards = [
{
    name:"curly rat",
    img:"https://lh4.googleusercontent.com/proxy/lfHcwcyeP3hp_ZHmBeOXwzStXxv6nsMtcUsALtgRun5gDXxpr2pjrcpETxQRP_4hLYZli9UnPik72BsMVQQ0_knL04yOF89Jmb0",
    id: 1
},
{
    name:"twin rat",
    img:"https://pesyk.kiev.ua/wp-content/uploads/Kudryavye-krysy-reks-2.jpg",
    id: 2
},
{
    name:"standart rat",
    img:"https://previews.123rf.com/images/fotojagodka/fotojagodka1311/fotojagodka131100303/23759133-rat-was-put-on-a-white-background-blue-self-standard-rat.jpg",
    id: 3
},
{
    name:"dambo rat",
    img:"https://4lapy.ru/resize/800x370/upload/medialibrary/7eb/7eba5cd1a1938a11efcc084bd563ff48.jpg",
    id: 4
},
{
    name:"bald rat",
    img:"https://lh3.googleusercontent.com/proxy/qt4PcoN8shM3OsWEppx5QZVaLLEn5U6Qz3zCVAuMMCB39SLfMzUUNOjY9Ye64B-HZ3OP-l5GsJKtoGBwVZkTAbVIB3q4VECogcETPc1gnsqnc95fd-GCGZM43D0zxpstc1ifhc4",
    id: 5
},
{
    name:"йорк",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYseWpZip9L81oWXlBV0xNZQVI2OhHbYM2SNTvrXa09A&s",
    id: 6
},
{
    name:"music rat",
    img:"https://images.prom.ua/13876669_dekorativna-schur.jpg",
    id: 7
},
{
    name:"cup rat",
    img:"https://lh4.googleusercontent.com/proxy/d99tig6EDjyealpUA7ljrkyn1xjhLV6ZmFmyOqYeZwboUGD9VHPhNSVWDZ41FUqdLizEKiLpFdutYwp79umptcYt4t25W8enKMDNv-Fxjto-ay5-su33e5M8",
    id: 8
},
{
    name:"street rat",
    img:"https://static.espreso.tv/uploads/article/2609693/images/im-8888.jpeg",
    id: 9
},
{
    name:"baby dog",
    img:"https://myyorks.ru/wp-content/uploads/2019/06/melkie-porody-sobak.jpg",
    id: 10
},
{
    name:"remi",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6nAOn_zB9OhCKcizoCe0xyWVqTfcziRdd8GsIwHEZA&s",
    id: 11
},
{
    name:"ikea rat",
    img:"https://images.prom.ua/4734148782_w640_h640_igrushechnaya-krysa-ikea.jpg",
    id: 12
},
]

let score = 0;

let time = 300

if (localStorage.getItem("time") != null) {
    time = parseInt(localStorage.getItem("time"));
} else {
    localStorage.setItem("time", 300)
}

$(".slideRules").on("click", function () {
    $(".rules").slideToggle();
});

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
    readOnly: true,
});

$("#time").knob({
    min: 0,
    max: 300,
    displayInput: true,
    readOnly: true,
    width: 150,
});

function startTime() {
    setInterval(function () {
        time = parseInt(localStorage.getItem("time"))
        time--;
        $("#time").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("Ти все проспав")
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

