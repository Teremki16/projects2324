let start = $.now();


$(document).ready(()=>{
    // alert(`З моменту запуску до моменту повного завантаження пройшло ${$.now() - start} мілісекунд`)
    // $("h1").click(function(){
    //     alert("This is heading")
    // })
    // $("p").click(function(){
    //     alert("This is paragraph")
    // })
    // $("h1, p, a").click(function(event){
    //     event.preventDefault( )
    //     console.log(event.target)
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
