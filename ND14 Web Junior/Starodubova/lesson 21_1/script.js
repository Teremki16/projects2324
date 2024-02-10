$("button").on("click", function(){
    let val = $("input").val()
    $("input").val("")
    $("ul").append(`<li>${val}</li>`)
})

$("html").on("click", "li", function(){
    $(this).fadeOut(1000)
    setTimeout(()=>$(this).remove(), 1000)
})