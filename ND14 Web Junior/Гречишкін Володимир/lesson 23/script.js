function rnd(max){
    return Math.floor(Math.random()*max)
}


$(".sharik").on("mouseenter",function(){
    $(this).css({
        "top":rnd(95) +"vh",
        "left":rnd(95) +"vw",
        "background":` rgb(${rnd(255)},${rnd(255)},${rnd(255)})`
    });
});