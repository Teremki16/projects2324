let start = $.now();

$(document).ready(()=>{
    // alert(`s momentu sapusku do povnogo savantazenya proushlo ${$.now() - start} milisekund`)
    // $("h1").click(function(){
    //     alert("ce zagolovok")

    // })
    // $("h1").click(function(){
    //     alert("ce PARAGRAF O BOSEEEE")

    // })
    // $("h1, p, a").click(function(event){
    //     event.preventDefault()
    //   console.log(event.target)
    // })

    $(".show").click(()=>{
        $("p").show()
    })

    $(".hide").click(()=>{
        $("p").hide()
    })

    $(".header").click(function(){
        $(".textBar").toggle()


    })
    
});


let opacity = 1
$(".fade").click(function(){
    opacity -= 0.1
    if(opacity <= 0) opacity = 1;
    $(this).fadeTo(1, opacity)
})