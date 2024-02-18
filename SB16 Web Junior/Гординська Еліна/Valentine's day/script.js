$("#heart").on("click", function(){
    $("#top").animate({"top": "-140px"}, 1000)
    $("#bottom").animate({"top": "285px"}, 1000)
    $("p, h1").animate({"opacity": "1"}, 3000)
})