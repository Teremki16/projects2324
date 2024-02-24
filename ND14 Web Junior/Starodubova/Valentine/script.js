$("#heart").on("click", function(){
    console.log("smtg");
    $("#top").animate({"top": "-130px"}, 1000)
    $("#bottom").animate({"top": "280px"}, 1000)
    $("h3,p").animate({"opacity": "1"}, 1000)
})