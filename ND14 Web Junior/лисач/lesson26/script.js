let controller = new ScrollMagic.Controller();

  

$("section").each(function(){
    let scene1 = new ScrollMagic.Scene({
        triggerElement: this,
        duration: "50%"
    })
    .setClassToggle(this, "fadeIN")
    .addIndicators()
    .addTo(controller)
})

