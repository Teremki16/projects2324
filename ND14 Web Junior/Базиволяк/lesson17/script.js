let start = $.now()



$(document).ready(() => {
    // alert(`Tite to ready: ${$.now()- start}`)\
    // $("h1").click(() => {
    //     alert("This is heading")
    // })
    // $("p").click(() => {
    //     alert("Це параграф я авічаю")
    // })
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
    $(this).hide()
})

$(".showAll").click(function(){
    $(".a").show()
})






















})