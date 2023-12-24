$(document).ready(function(){
    $(".hideslow").click(function(){
        $(this).hide("slow")
    })
    $(".hidefast").click(function(){
        $(this).hide("fast")
    })
    $(".hide3s").click(function(){
        $(this).hide(3000)
    })
    $(".hide1s").click(function(){
        $(this).hide(1000)
        alert("AHTUNG!")
    })
    $(".hideshow").click(function(){
        $(".b").show()
    })

    let isVisible=true
    $(".header").click(function(){
        // isVisible=!isVisible;
        // isVisible ? $(".textBar").hide():$(".textBar").show();
        if(isVisible){
            $(".textBar").show()
            isVisible=!isVisible;
        }else{
            $(".textBar").hide()
            isVisible=!isVisible;
        }
    })
})
