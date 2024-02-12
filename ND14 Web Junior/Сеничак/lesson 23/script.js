function rnd(max) {
    return Math.floor(Math.random() * max);
}

// $(".sharik").on("mouseenter", function () {
//     $(this).css({
//         top: rnd(95) + "vh",
//         left: rnd(95) + "vw",
//         background: `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`,
//     });
// });

$(".top").on("click", function(){
    $(".sharik").css({"top": "-=50px"})
})
$(".bottom").on("click", function(){
    $(".sharik").css({"top": "+=50px"})
})
$(".left").on("click", function(){
    $(".sharik").css({"left": "-=50px"})
})
$(".right").on("click", function(){
    $(".sharik").css({"left": "+=50px"})
})
