$(document).ready(function(){
    $(".hideslow").click(function(){
        $(this).hide("slow")
    })
})

    $(".hidefast").click(function(){
        $(this).hide("fast")
    })

    $(".hide3s").click(function(){
        $(this).hide(3000)
    })
    $(".hide2s").click(function(){
        $(this).hide(1000, function(){
            alert("ACHTUNG")
        })
    })
    $(".show").click(function(){
        $(".b").show("slow")
    })

let isVisible = true
$(".header").click(function(){
    isVisible = !isVisible
    isVisible?$(".textBar").hide() : $(".textBar").show()
})