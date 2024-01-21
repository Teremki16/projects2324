$(".b1").click(function(){
    confirm("text"+$("h1").text())
})
$(".b2").click(function(){
    confirm("html"+$("h1").html())
})

$(".setlink").click(function(){
    let value=$("input").val()
    $("a").attr("href", "http://"+value)
    $("input").val("")
})

let a = {
    red:0,
    blue:0,
    green:0,
}
$(".r input[type='range']").on("input", function(event){
    a.red=$(this).val()
    $(".r input[type='text']").val(a.red)
    $("body").css({backgroundColor:`rgb(${a.red},${a.green},${a.blue})`})
})
$(".g input[type='range']").on("input", function(event){
    a.green=$(this).val()
    $(".g input[type='text']").val(a.green)
    $("body").css({backgroundColor:`rgb(${a.red},${a.green},${a.blue})`})
})
$(".b input[type='range']").on("input", function(event){
    a.blue=$(this).val()
    $(".b input[type='text']").val(a.blue)
    $("body").css({backgroundColor:`rgb(${a.red},${a.green},${a.blue})`})
})