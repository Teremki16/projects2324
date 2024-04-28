$(".sRu").on("click",function(){
    $(".rules").slideToggle();
})

$(".rules").slideUp(0)

let card=[
    {
        name:"Кактус",
        img:"https://www.anekdot.ru/i/caricatures/normal/20/9/18/1600450998.jpg",
        id:1,
    },
    {
        name:"Ківі",
        img:"https://i.pinimg.com/564x/a5/2d/eb/a52debc82be1efd54b038b9e7ade74d9.jpg",
        id:2,
    },
    {
        name:"",
        img:"",
        id:3,
    },
    {
        name:"",
        img:"",
        id:4,
    },
    {
        name:"Кактус",
        img:"https://demotivatorium.ru/sstorage/3/2021/11/10054853519309/demotivatorium_ru_i_hochetsja_i_koletsja_202837.jpg",
        id:5,
    },
    {
        name:"",
        img:"",
        id:6,
    },
    {
        name:"Ківі",
        img:"https://i.pinimg.com/564x/74/b0/1e/74b01eaa9b5bd6ec68488d001e3afa70.jpg",
        id:7,
    },
    {
        name:"Риба пітушок",
        img:"https://i.pinimg.com/474x/22/18/24/221824d83f9fd80a0f08ec0d2986870e.jpg",
        id:8,
    },
    {
        name:"",
        img:"",
        id:9,
    },
    {
        name:"",
        img:"",
        id:10,
    },
    {
        name:"",
        img:"",
        id:11,
    },
    {
        name:"Пітух",
        img:"https://i.pinimg.com/474x/63/df/57/63df57f880491ffa535440ecc6cdb338.jpg",
        id:12,
    },
]

let ts=localStorage
let time
if(ts.getItem("time")!=null ){
    time=parseInt(ts.getItem("time"))
}else{
    time=300
    ts.setItem("time",300)
}

let score=0
function rnd(n){
    return Math.floor(Math.random()*n);
}

$("#score").knob({
    min: 0,
    max: 5,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    lineCap: "round",
    readOnly: true,
    bgColor: "gainboro",
    fgColor: "hotpink",
})

$("#timer").knob({
    min: 0,
    max: 300,
    readOnly: true,
    bgColor: "gainboro",
    fgColor: "hotpink",
})

function sT(){
    setInterval(()=>{
        time=parseInt(ts.getItem("time"))-1
        $("#timer").val(time).trigger("change")
        if(time<=0){
            alertify.error("Time is over")
            setTimeout(()=>window.open("index.html", "_self", false),1000)
            ts.removeItem("time")
        }else if(time>0){
            ts.setItem("time",time)
        }
    },1000)
}

$("#start").on("click",()=>{
    $("#start").css("display","none")
    sT()
})
