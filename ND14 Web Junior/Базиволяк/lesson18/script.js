$(document).ready(function () {
    $(".item:nth-child(1)").click(function () {
        $(this).hide("fast")
    })
    $(".item:nth-child(2)").click(function () {
        $(this).hide("slow")
    })
    $(".item:nth-child(3)").click(function () {
        $(this).hide(3000)
    })
    $(".item:nth-child(4)").click(function () {
        $(this).hide(1000, function () {
            alert("я заховався!")
        })
    })
    $(".item:nth-child(5)").click(function () {
        $(".item").show("fast")
    })

    $(".header").click(function(){
        $(".text").fadeToggle(1000)
    })
















})