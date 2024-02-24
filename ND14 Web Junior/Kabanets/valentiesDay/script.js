$("#heart").on("click", function(){
    $("#top").animate({"top": "-130px"}, 1000)
    $("#bottom").animate({"top": "287px"}, 1000)
    $("p, h3").animate({"opacity": "100"}, 1000)
})