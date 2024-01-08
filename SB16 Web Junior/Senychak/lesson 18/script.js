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

    $(".header").click(function () {
        $(".textBar").fadeToggle(400);
    });

    let opacity = 1;
    $(".fade").click(function () {
        opacity -= 0.1;
        if (opacity <= 0) opacity = 1;
        $(this).fadeTo(200, opacity);
    });
});
