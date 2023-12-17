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

    $(".a").click(function(){
        $(this).hide()


    })
    
});
