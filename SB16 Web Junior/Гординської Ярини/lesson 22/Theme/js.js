let theme = true;

$(".theme").on("click", function(){
    theme = !theme
    if(theme){
        $(this).addClass("light")
        $(this).html(`<i class="fa-solid fa-ghost"></i>`)
        $("body").css("background", 'background-image: linear-gradient(270deg, #2376ae 0%, #c16ecf 100%)')
        $("footer, header, section").css('background', "rgba(0, 0, 0, 0.2")
    }else {
        $(this).addClass("dark")
        $(this).html(`<i class="fa-solid fa-eye"></i>`)
        $("body").css("background", 'linear-gradient(270deg, #283c49 0%, #4e3752 100%')
        $("footer, header, section").css('background', "rgba(255, 255, 255, 0.2")

    }
})
