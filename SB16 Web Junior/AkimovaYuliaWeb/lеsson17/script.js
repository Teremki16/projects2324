let start=$.now();

// $(document).ready(()=>{
//     alert(`Z momentu zapusku proyshlo ${$.now()-start} ms`)
// })

$(document).ready(()=>{
    // $("h1").click(function(){
    //     alert("BAH!This is heading!")
    // })
    // $("p").dblclick(function(){
    //     alert("NO!This is paraghraph!")
    // })
    // $("a").mouseleave(function(){
    //     alert("AAAAA!This is link!")
    // })

    // $("h1,p,a").click(function(event){
    //     event.preventDefault()
    //     console.log(event.target)
    // })

    // $(".show").click(()=>{
    //     $("p").show()
    // })
    // $(".hide").click(()=>{
    //     $("p").hide()
    // })

    $(".a").click(function(){
        $(this).hide()
    })

})