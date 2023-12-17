let start = $.now()


$(document).ready(()=>{
    //alert(`dtrgyuiushay ushcuihu uqwyfu wy ${$.now() - start} ufysyk`)
    // $("h1").click(function(){
    //     alert("This is heading")
    // })

    // $("p").click(function(){
    //     alert("Eto paragraph")
    // })
    // $("h1, p, a").click(function(event){
    //     console.log(event.target)
    // })
    $(".show").click(()=>{
        $("p").show()
    });
    $(".hide").click(()=>{
        $("p").hide()
    })

    $(".a").click(function(){
        $(this).hide()
    })

})
