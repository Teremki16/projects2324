$(document).ready(function(){
    let t ="light"
    $(".theme").on("click", function(){
        console.log(t)
if(t == "light"){
    t = "dark"
    $(this).html(`<i class="fa-solid fa-circle-half-stroke"></i>`)
    $("header h1, a, section, footer").addClass("dark")
    $("body").css("background", "linear-gradient(270deg, #34bdca 0%, #e443c7 100%)")
}else{
    t ="light"
    $(this).html(`<i class="fa-solid fa-circle-half-stroke r"></i>`)
    $("header h1, a, section, footer").removeClass("dark")
        $("body").css("background", "linear-gradient(270deg, #77bdca 0%, #e886c7 100%)")}
    })
})