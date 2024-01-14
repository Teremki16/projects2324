// $(".header").click(function(){
//     $(".text").slideToggle("slow")
// })

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
    // $(".box").animate({left: "500px", borderRadius: "50%"})
    // $(".box").animate({top: "500px"})
    // $(".box").animate({left: "0"})
    // $(".box").animate({top: "0", borderRadius: "0"})
    // $(".box").animate({
    //     width: "300px",
    //     height: "300px",
    //     opacity: "0.1"
    // })
    $(".box").animate({
        width: "300px",
        opacity: "0.5"
    })
    $(".box").animate({
        width: "300px",
        opacity: "1"
    })
    $(".box").animate({
        width: "100px",
        opacity: "0.5"
    })
    $(".box").animate({
        width: "100px",
        opacity: "1"
    })
})