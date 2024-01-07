$(document).ready(function () {
    $(".hideslow").click(function () {
        $(this).hide("slow");
    });
    $(".hidefast").click(function () {
        $(this).hide("fast");
    });
    $(".hide3s").click(function () {
        $(this).hide(3000);
    });
    $(".hide1s").click(function () {
        $(this).hide(1000, function () {
            alert("ǍCHTUNG");
        });
    });
    $(".show").click(function () {
        $(".b").show("slow");
    });

    let isVisible = true;
    $(".header").click(function () {
        isVisible = !isVisible;
        isVisible ? $(".textBar").hide() : $(".textBar").show();
        if(isVisible){
            $(".textBar").show()
        }else{
            $(".textBar").hide()
        }
    });
});

let opacity = 1
$(".fade").click(function(){
    opacity -= 0.1
    if(opacity <= 0) opacity = 1;
    $(this).fadeTo(1, opacity)
})
