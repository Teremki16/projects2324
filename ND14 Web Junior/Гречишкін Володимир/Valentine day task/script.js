$("#heart").on("click",function(){
    $("#top").animate({"top": "-140px"},140)
    $("#bottom").animate({"top": "290px"},290)
    $("p,h3").animate({"opacity": "1"},1)
})