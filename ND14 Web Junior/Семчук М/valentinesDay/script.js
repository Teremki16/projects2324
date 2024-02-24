$("#heart").on("click", function(){
    $("#top").animate({"top": "-141px"}, 1000)
    $("#bottom").animate({"top": "287px"}, 1000)
    $("h3, p").animate({"opacity": "100"}, 1000)
})