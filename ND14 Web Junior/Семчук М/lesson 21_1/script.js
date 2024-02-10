$("button").on("click", function(){
    let value = $("input").val()
    $("input").val("")
    $("ul").append(`<li>${value}</li>`)
})

$("html").on("click", "li", function(){
    $(this).fadeOut(1000)
    setTimeout(()=>$(this).remove(), 1000)
})