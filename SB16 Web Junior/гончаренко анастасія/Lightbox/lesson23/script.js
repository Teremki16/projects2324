function rnd(max){
    return Math.floor(Math.random() * max)
}
$(".top").on("click", function(){
    $(".petro").css({"top": "-=50px"})
})
$(".bottom").on("click", function(){
    $(".petro").css({"top": "+=50px"})
})
$(".left").on("click", function(){
    $(".petro").css({"left": "-=50px"})
})
$(".right").on("click", function(){
    $(".petro").css({"left": "+=50px"})
})