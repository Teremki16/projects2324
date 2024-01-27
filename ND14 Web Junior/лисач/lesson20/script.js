$(".text").click(function(){
    alert($("h1").text())
})
$(".html").click(function(){
    alert($("h1").html ())
})

$("#setlink").click(function(){
    let value = $("#text").val()
    $("a").attr("href", "httr://" + value)
    $("#text").val("")
})