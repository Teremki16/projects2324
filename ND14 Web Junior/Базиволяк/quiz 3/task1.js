$(".rules").slideUp(0)

let cards = [
    {
        name:"борщ",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.unian.net%2Frecipes%2Ffirst-courses%2Fborscht%2Fborshch-recept-recept-ukrainskogo-krasnogo-borshcha-10976498.html&psig=AOvVaw2bUCUf62wzbh_9bnuibs9H&ust=1714393870306000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjJ9v705IUDFQAAAAAdAAAAABAE",
        id: 1
    },
    {
        name:"сало",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fnapensii.ua%2Fnews%2F231529-kakoe-salo-samoe-opasnoe-dlya-zdorovya-mnogie-dazhe-ne-dogadyvayutsya-o-vrede%2F&psig=AOvVaw1s6n7iIP9nO9-euF7rVakP&ust=1714393922728000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLiB1Jr15IUDFQAAAAAdAAAAABAE",
        id: 1
    },
    {
        name:"чорний хліб",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fdietolog.pl.ua%2Fuk%2Fkorist-ta-shkoda-chornogo-rzhanogo-hliba%2F&psig=AOvVaw11pDom8DcgPWsKYlTlyFgU&ust=1714393986578000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDs0ez15IUDFQAAAAAdAAAAABAS",
        id: 1
    },
    {
        name:"вареники",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ozon.ru%2Fclub%2Farticle%2Fvareniki-s-kartofelem-poshagovyyi-retsept-16304849%2F&psig=AOvVaw0DBbGkAxlt-qm9x8fRdToU&ust=1714394175329000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDGiJP25IUDFQAAAAAdAAAAABAE",
        id: 1
    },
    {
        name:"сметана",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Flaktonmilk.ru%2Farticles%2Fwhat_is_sour_cream_the_quality_requirements_of_the_product%2F&psig=AOvVaw0ivny-6Kxm7tq0SzQO1vz6&ust=1714394215976000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJibkaf25IUDFQAAAAAdAAAAABAE",
        id: 1
    },
    {
        name:"смаколик(російська дитина)",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fuk%2F%25D1%2584%25D0%25BE%25D1%2582%25D0%25BE%2F%25D1%2585%25D0%25BB%25D0%25BE%25D0%25BF%25D1%2587%25D0%25B8%25D0%25BA-%25D1%2582%25D1%2580%25D0%25B8%25D0%25BC%25D0%25B0%25D1%2594-%25D1%2580%25D0%25BE%25D1%2581%25D1%2596%25D0%25B9%25D1%2581%25D1%258C%25D0%25BA%25D0%25B8%25D0%25B9-%25D0%25BF%25D1%2580%25D0%25B0%25D0%25BF%25D0%25BE%25D1%2580-gm594480348-101952341&psig=AOvVaw3eb8xzauYSbHgimh034yVP&ust=1714394377491000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIiSjfT25IUDFQAAAAAdAAAAABAE",
        id: 1
    },
    {
        name:"паска",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DfPhBbpuLbtk&psig=AOvVaw0SDE2MSQGTpyySn00Y7Ca2&ust=1714394469259000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCnyZ335IUDFQAAAAAdAAAAABAE",
        id: 1
    },
    {
        name:"куліш",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fgalya-baluvana.kiev.ua%2Fproduct%2Fkulish-kozaczkyj%2F&psig=AOvVaw2gNCC-tBZTg59WdBsswUkr&ust=1714394816814000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCx78L45IUDFQAAAAAdAAAAABAE",
        id: 1
    },
    {
        name:"",
        img:"",
        id: 1
    },
    {
        name:"",
        img:"",
        id: 1
    },
    {
        name:"",
        img:"",
        id: 1
    },
    {
        name:"",
        img:"",
        id: 1
    },
    {
        name:"",
        img:"",
        id: 1
    }
]

$(".slideRules").on("click", function () {
    $(".rules").slideToggle()
})




let score = 0

let time = 300;
if (localStorage.getItem("time") != null) {
    time = parseInt(localStorage.getItem("time"))
} else {
    localStorage.setItem("time", 300);
}

function rnd() {
    return Math.floor( Math.random() * 12)
}

$("#progress").knob({
    min: 0,
    max: 5,
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
})


function startTime() {
    setInterval(function () {
        time = parseInt(localStorage.getItem("time"))
        time--;
        $("#time").val(time).trigger("change")
        if (time <= 0) {
            alertify.error("Time is over")
            setTimeout(() => window.open("../quiz/task1.html"));
            localStorage.removeItem("time")
        } else if(time>0){
            localStorage.setItem("time", time)
        }
        
     
    }, 1000)
}

$("#start").on("click", () => {
    startTime()
    $("#start").css("display", "none")
   
})




