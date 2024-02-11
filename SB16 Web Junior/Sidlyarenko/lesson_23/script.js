function rnd(max){
    return Math.floor(Math.random()*max)
}

// $(".pedro").on("mouseenter", function(){
//     $(this).css({
//         "top": rnd(95) + "vh",
//         "left": rnd(95) + "vw",
//         "background-color": `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`
//     })
// })
$(".top").on("click", function(){
    $(".pedro").css({"top": "-=50px"})
})
$(".down").on("click", function(){
    $(".pedro").css({"top": "+=50px"})
})
$(".left").on("click", function(){
    $(".pedro").css({"left": "-=50px"})
})
$(".right").on("click", function(){
    $(".pedro").css({"left": "+=50px"})
})