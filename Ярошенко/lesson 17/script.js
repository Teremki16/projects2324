let start= $.now()

$(document).ready(()=>{
   /* alert(`Tite to ready: ${$.now() - start}`)
$("hi").click(()=>{
    alept("This is heading")
})
$("p").click(()=>{
    alert("This is paragraph")
})*/

$("h1, p, a").click((event)=>{
    event.preventDefault()
    let elem = event.target
    console.log("User clicked on:", elem.tagName)
})

$(".show").click(()=>{
    $(".text").show()
})
$(".hide").click(()=>{
    $(".text").hide()
})

$(".a").click(function(){
    $(this).hide();
});

$(".showAll").click(function(){
    $(".a").show()
})




})