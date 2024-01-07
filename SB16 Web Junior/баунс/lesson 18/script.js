$(document).ready(function(){
    $(".hideslow").click(function(){
        $(this).hide("slow")
    })

$(document).ready(function(){
    $(".hidefast").click(function(){
        $(this).hide("fast")
    })
})
$(document).ready(function(){
    $(".hide3s").click(function(){
        $(this).hide(3000)
    })
})
$(document).ready(function(){
    $(".hide1s").click(function(){
        $(this).hide(1000, function(){
            alert("ACHTUNG")
        })
    })
})
    $(".show").click(function(){
        $(".b").show("slow")
        })

        let isVisible = true
        $(".header").click(function(){
            $(".textBar").fadeToggle(400)
        });
});

let opacity = 1
$(".fade").click(function(){
    opacity -= 0.1
    if(opacity <= 0) opacity = 1;
    $(this).fadeTo(1, opacity);
});