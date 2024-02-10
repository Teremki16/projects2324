$(document).ready(function(){
    let t = "light";
    $(".theme").on("click", function(){
        if(t == "light"){
            t= "dark"
            $(this).html(`<i class="fa-solid fa-moon"></i>`)
            $("header h1, section, footer, a").addClass("dark")
        }else {
            t = "light"
            $(this).html(`<i class="fa-solid fa-sun"></i>`)
            $("header h1, section, footer, a").removeClass("dark")
            $(this).css("backround", "rgba(0, 0, 0, 0.2)")
            $("body").css("backround","linear-gradient(270deg, #2376ae 0%, #c16ecf 100%)")
        }
    })
})