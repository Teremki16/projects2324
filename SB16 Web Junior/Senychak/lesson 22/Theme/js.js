let theme = true; //true == light , false == dark

$(".theme").on("click", function(){
    theme = !theme
    if(theme){
        $(this).addClass("light")
        $(this).html(`<i class="fa-solid fa-sun"></i>`)
        $("body").css("background", 'linear-gradient(270deg, #2376ae 0%, #c16ecf 100%)')
        $("footer, header, section").css('background', "rgba(0, 0, 0, 0.2)")
    }else {
        $(this).addClass("dark")
        $(this).html(`<i class="fa-solid fa-moon"></i>`)
        $("body").css("background", 'linear-gradient(270deg, #0f3956 0%, #994aa7 100%)')
        $("footer, header, section").css('background', "rgba(255, 255, 255, 0.2)")
    }
})
