$(".a1 > .head").click(function(){
    $(".a1 > .text").slideToggle("fast")
})
$(".a2 > .head").click(function(){
    $(".a2 > .text").slideToggle("fast")
})
$(".a3 > .head").click(function(){
    $(".a3 > .text").slideToggle("fast")
})

$("button").click(function(){
    $(".box").animate({left: "500px"})
    $(".box").animate({top: "500px"})
    $(".box").animate({left: "0px"})
    $(".box").animate({top: "0px"})
})