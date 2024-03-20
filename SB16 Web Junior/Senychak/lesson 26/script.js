let controller = new ScrollMagic.Controller();

let headerScene = new ScrollMagic.Scene({
    triggerElement: "header",
    triggerHook: 0,
    duration: "10%"
}).setPin("header", {
    pushFollowers: false
}).addIndicators().addTo(controller)


$("section").each(function () {
    let scene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: "200%",
        triggerHook: 0,
    })
        .setPin(this, {
            pushFollowers: false
        })
        .addIndicators()
        .addTo(controller);
});
