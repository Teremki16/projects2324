function rnd(max){
    return Math.floor(Math.random()*max)
}

// $(".petro").on("mouseenter",function(){
//     $(this).css({
//         "top":rnd(95)+"vh",
//         "left":rnd(95)+"vw",
//         "background-color":`rgb(${rnd(255)},${rnd(255)},${rnd(255)})`
//     })
// })

$(".top").on("click",function(){
    $(".petro").css({"top":"-=100"})
})

$(".bottom").on("click",function(){
    $(".petro").css({"top":"+=100"})
})

$(".right").on("click",function(){
    $(".petro").css({"left":"+=100"})
})

$(".left").on("click",function(){
    $(".petro").css({"left":"-=100"})
})