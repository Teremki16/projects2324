let theme=true//true=light

$(".theme").on("click", function(){
    theme=!theme
    if(theme){
        $(this).addClass("light")
        $(this).html(`<i class="fa-solid fa-sun"></i>`)
        $("body").css("background",'linear-gradient(270deg, #2380be 0%, #ba43cf 100%)')
        $("footer, header, section").css('background',"rgba(0, 0, 0, 0.2")
    }
    else{
        $(this).addClass("dark")
        $(this).html(`<i class="fa-solid fa-moon"></i>`)
        $("body").css("background",'linear-gradient(270deg, #1d4763 0%, #7b1f8b 100%)')
        $("footer, header, section").css('background',"rgba(255, 255, 255, 0.5")
    }
})