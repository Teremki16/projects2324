let number = 1;

$("button").on("click", ()=>{
    let v = $("input").val()
    $("input").val("")
    $(".todolist").append(`<li class="i${number}">${v}</li>`)
    number++;

});


$("html").on("click", "li", function(){
    $(this).fadeOut(1000)
    setTimeout(()=> $(this).remove(), 1000);
})