let timer = $.now()

$(document).ready(function(){
    // alert(`Time to load ${$.now() - timer}`)

    $("h1, p, a").click(function(){
        alert($(this).text())
    })

    $(".show").click(function(){
        $(".text").show()
    })
    $(".hide").click(function(){
        $(".text").hide()
    })

    $(".a").click(function(){
        $(this).hide()
    })











})