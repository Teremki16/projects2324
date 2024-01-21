$(".text").click(function(){
    confirm("text:" + $("h1").text())
})
$(".html").click(function(){
    confirm("html:" + $("h1").html())
})

$(".setlink").click(function(){
    let value = $("input").val()
    $("a").attr("href", "http://" + value)
    $("input").val("")
})


let color = {
    red: 0, 
    blue: 0,
    green: 0,
}

$(".r input[type='range']").on("input", function(e){
    color.red = $(this).val()
    $(".r input[type= 'text']").val(color.red)
    $("body").css({backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`})
})
$(".g input[type='range']").on("input", function(e){
    color.green = $(this).val()
    $(".g input[type= 'text']").val(color.green)
    $("body").css({backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`})
})
$(".b input[type='range']").on("input", function(e){
    color.blue = $(this).val()
    $(".b input[type= 'text']").val(color.blue)
    $("body").css({backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`})
})
