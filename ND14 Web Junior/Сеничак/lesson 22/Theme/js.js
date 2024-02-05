$(document).ready(function(){
    let t = "light";
    $(".theme").on("click", function(){
        console.log(t)
        if(t == "light"){
            t = "dark"
            $(this).html(`<i class="fa-solid fa-moon"></i>`)
            $("header h1, section, footer, a").addClass("dark")
            $(this).css("background", "rgba(255, 255, 255, 0.2)")
            $("body").css("background", "linear-gradient(270deg, #13565e 0%, #613e7f 100%)")
        }else {
            t = "light"
            $(this).html(`<i class="fa-solid fa-sun"></i>`)
            $("header h1, section, footer, a").removeClass("dark")
            $(this).css("background", "rgba(0, 0, 0, 0.2)")
            $("body").css("background", "linear-gradient(270deg, #2376ae 0%, #c16ecf 100%)")
        }
    })
})