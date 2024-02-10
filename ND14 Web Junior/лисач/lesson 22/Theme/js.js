$(document).ready(function(){
    let t = "light";
    $(".theme").on("click", function(){
        if(t == "light"){
            t = "dark"
            $(this).html(`<i class="fa-regular fa-moon"></i>`)     

            $("header h1, section, footer").addClass("dark")
            $(this).css("background", "rgba(255, 255, 255, 0.2)")
        }else {
            t = "light"
            $(this).html(`<i class="fa-regular fa-sun"></i>`)
            $("header h1, section,footer, a").removeClass("dark")
            $(this).css("background", "linear-gradient(270deg, #2376ae 0%, #c16ecf 100%)")
        }
    })
})