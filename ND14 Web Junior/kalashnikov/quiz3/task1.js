$(".rules").slideUp(0)

let cards = [
    {
        name: "M4A1",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcounterstrike.fandom.com%2Fru%2Fwiki%2F%25D0%259A%25D0%25B0%25D1%2582%25D0%25B5%25D0%25B3%25D0%25BE%25D1%2580%25D0%25B8%25D1%258F%3A%25D0%259E%25D1%2580%25D1%2583%25D0%25B6%25D0%25B8%25D0%25B5_CS%3AGO&psig=AOvVaw0JcFQyq4RtY99FYymFeHnj&ust=1714393580123000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjCjPjz5IUDFQAAAAAdAAAAABAE",
        id: 1
    },
    {
        name: "AWP",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsteamcommunity.com%2Fsharedfiles%2Ffiledetails%2F%3Fid%3D2270267163&psig=AOvVaw0JcFQyq4RtY99FYymFeHnj&ust=1714393580123000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjCjPjz5IUDFQAAAAAdAAAAABAc",
        id: 2
    },
    {
        name: "AK47",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdzen.ru%2Fa%2FX6KeSl3FmEXdpCce&psig=AOvVaw0JcFQyq4RtY99FYymFeHnj&ust=1714393580123000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjCjPjz5IUDFQAAAAAdAAAAABAp",
        id: 3
    },
    {
        name: "UMP-45",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsteamcommunity.com%2Fsharedfiles%2Ffiledetails%2F%3Fid%3D2270267163&psig=AOvVaw0JcFQyq4RtY99FYymFeHnj&ust=1714393580123000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjCjPjz5IUDFQAAAAAdAAAAABAx",
        id: 4
    },
    {
        name: "Tec-9",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcounterstrike.fandom.com%2Fru%2Fwiki%2F%25D0%259A%25D0%25B0%25D1%2582%25D0%25B5%25D0%25B3%25D0%25BE%25D1%2580%25D0%25B8%25D1%258F%3A%25D0%259F%25D0%25B8%25D1%2581%25D1%2582%25D0%25BE%25D0%25BB%25D0%25B5%25D1%2582%25D1%258B_CS%3AGO&psig=AOvVaw0mPImI3SoAojSJgLHpqNaY&ust=1714393833055000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjHl-_05IUDFQAAAAAdAAAAABAE",
        id: 5
    },
    {
        name: "USP",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcounterstrike.fandom.com%2Fru%2Fwiki%2FUSP-S&psig=AOvVaw2_AMp0xyeVZVVn4zwEkgK8&ust=1714393934822000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDOmp315IUDFQAAAAAdAAAAABAE",
        id: 6
    },
    {
        name: "Dual Berettas",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcounterstrike.fandom.com%2Fru%2Fwiki%2FDual_Berettas_%2528CS%3AGO%2529&psig=AOvVaw3AN4_kl9F-uvP0eR4617BU&ust=1714393994950000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCwgbr15IUDFQAAAAAdAAAAABAE",
        id: 7
    },
    {
        name: "P250",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcounterstrike.fandom.com%2Fru%2Fwiki%2FP250&psig=AOvVaw10qHYO3psoW4Lj53QjG19j&ust=1714394019684000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjo7MX15IUDFQAAAAAdAAAAABAJ",
        id: 8
    },
    {
        name: "Desert Eagle",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2FDesert_Eagle&psig=AOvVaw2lzFJSurI5KZw7ysfZ-t-p&ust=1714394082364000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCe8er15IUDFQAAAAAdAAAAABAn",
        id: 9
    },
    {
        name: "Revolver R8",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwiki.cs.money%2Fru%2Fweapons%2Fr8-revolver%2Fmemento&psig=AOvVaw1glh1gNtAwdEm46DnGS0Fg&ust=1714394162421000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDvv4r25IUDFQAAAAAdAAAAABAE",
        id: 10
    },
    {
        name: "P90",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fguns.club%2Flib%2Foruzhie%2Fpistolet-pulemet-fn-p90-fantasticheskoe-oruzhie-iz-belgii%2F&psig=AOvVaw3MCLCGkMY_l-427Nf30TEB&ust=1714394229188000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjAtar25IUDFQAAAAAdAAAAABAE",
        id: 11
    },
    {
        name: "AUG",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcounterstrike.fandom.com%2Fru%2Fwiki%2FAUG_%2528CS%3AGO%2529&psig=AOvVaw0TIW-gBSxGKCoMcMlExC_G&ust=1714394265063000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiWxrz25IUDFQAAAAAdAAAAABAE",
        id: 12
    },
]

let score = 0
let time = 300;

if(localStorage.getItem("time") != null){
    time = localStorage.getItem("time")
}else{
    localStorage.setItem("time", time)
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
    readOnly:true
})

$("#time").knob({
    min: 0,
    max: 300,
    displayInput: true,
    readOnly:true,
    width: 200,
})


function startTime(){
    setInterval(function(){
        time =  parseInt(localStorage.getItem("time"))
        time--;
        $("#time").val(time).trigger("change")
        if(time<=0){
            alertify.error("Time is over!")
            setTimeout(()=>window.open("../quiz/task1.html"))
            localStorage.removeItem("time")
        }else if(time > 0){
          localStorage.setItem("time", time)  
        }
    }, 1000)
}


$("#start").on("click", ()=>{
    startTime()
    $("#start").css("display","none")
    $("#audio").css("display","block")
    startQuest(rnd())
})
