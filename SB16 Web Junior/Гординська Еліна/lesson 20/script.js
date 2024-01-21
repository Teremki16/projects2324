$(".text").click(function(){
    confirm("text: " + $("h1").text())
})

$(".html").click(function(){
    confirm($("h1").html())
})

$(".setlink").click(function(){
    let value = $("input").val()
    $("a").attr("href", "http://" + value);
    $("input").val("")
})

let color = {
    red: 0, 
    blue: 0,
    green: 0,
}

$(".r input[type='range']").on("input", function(event){
    color.red = $(this).val()
    $(".r input[type='text']").val(color.red)
    $("input[type='range']").css({accentColor: `rgb(${color.red}, ${color.green}, ${color.blue})`})
})
$(".g input[type='range']").on("input", function(event){
    color.green = $(this).val()
    $(".g input[type='text']").val(color.green)
    $("input[type='range']").css({accentColor: `rgb(${color.red}, ${color.green}, ${color.blue})`})
})
$(".b input[type='range']").on("input", function(event){
    color.blue = $(this).val()
    $(".b input[type='text']").val(color.blue)
    $("input[type='range']").css({accentColor: `rgb(${color.red}, ${color.green}, ${color.blue})`})
})
