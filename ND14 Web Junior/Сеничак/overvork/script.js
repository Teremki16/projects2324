$(".item:nth-child(1)").click(function(){
    $(this).hide("fast");
})
$(".item:nth-child(2)").click(function(){
    $(this).hide("slow");
})
$(".item:nth-child(3)").click(function(){
    $(this).hide(3000);
})
$(".item:nth-child(4)").click(function(){
    $(this).hide(1000, function(){
        alert("Я заховався")
    });
})
$(".item:nth-child(5)").click(function(){
    $(".item").show("slow")
})

$("button").click(function(){
    $("p").fadeToggle("fast")
})

let opacity = 1;
$(".fade").click(function(){
    $(this).fadeTo(100, opacity)
    opacity -= 0.1
    if(opacity <= 0) opacity = 1
})