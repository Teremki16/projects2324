$("#heart").on("click", function(){
    $("#top").animate({"top" : "-130px"}, 1000)
    $("#bottom").animate({"top" : "280px"}, 1000)
    $("p,h3").animate({"opacity" : "1"}, 1000)
})