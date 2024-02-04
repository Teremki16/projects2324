let theme = true;

$(".theme").on("click", function(){
    if(theme){
        $(this).addClass("light")
        $(this).html(`<i class="fa-solid fa-sun"></i>`)
        $("body").css("background", `linear-gradient(270deg, #2376ae 0%, #c16ecf 100%`)
        $("footer, header, section").css('background', "rgba(255, 255, 255, 0.2)")
    }else {
    $(this).addClass("dark")
        $(this).html(`<i class="fa-solid fa-moon"></i>`)
        $("body").css("background", `linear-gradient(270deg, #0f3956 0%, #c994aa7 100%`)
        $("footer, header, section").css('background', "rgba(255, 255, 255, 0.2)")
    }
})