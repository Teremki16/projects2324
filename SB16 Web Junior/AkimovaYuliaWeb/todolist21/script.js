let n=1;
$("button").on("click", ()=>{
    let v=$("input").val()
    $("input").val("")
    $(".todolist").append(`<li class="i${n}">${v}</li>`)
    n++
})
$("html").on("click","li", function(){
    $(this).fadeOut(1000)
    setTimeout(()=>$(this).remove(),1000)
    n--
})