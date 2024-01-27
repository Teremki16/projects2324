// $("button").click(function () {
//     $(".box").animate({
//         height: "300px",
//         opacity: "0.5"
//     })
//     $(".box").animate({
//         width: "300px",
//         opacity: "1"
//     })
//     $(".box").animate({
//         height: "100px",
//         opacity: "0.5"
//     })
//     $(".box").animate({
//         width: "100px",
//         opacity: "1"
//     })
// })
$(".text").click(function(){
    alert($("h1").text())
})
$(".html").click(function(){
    alert($("h1").html())
})
$("#setlink").click(function(){
let value = $("#text").val()
$("a").attr("href", "http://"+ value)

})

let color = {
    r: 0,
    g: 0,
    b: 0
}

function updateColor(){
    $("body").css({background : `rgb(${color.r}, ${color.g}, ${color.b})`})
}

$(".range.r").on("change", function(){
    color.r = $(this).val()
        $(".t.r").val(color.r)
        updateColor()
    
})
$(".range.g").on("change", function(){
    color.g = $(this).val()
        $(".t.g").val(color.g)
        updateColor()
    
})
$(".range.b").on("change", function(){
    color.b = $(this).val()
        $(".t.b").val(color.b)
        updateColor()
    
})