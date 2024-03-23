let controller = new ScrollMagic.Controller();

let headerScene = new ScrollMagic.Scene({
    treggerElement: "header",
    triggerHook: 0,
    duration: "10%"
}).setPin("header", {
    pushFollowers: false
}).addTo(controller)
let headerScene2 = new ScrollMagic.Scene({
    treggerElement: ".s1",
    triggerHook: 0.3,
}).setPin("header", {
    pushFollowers: false
}).addTo(controller)


$("section").each(function(){
    let scene1 = new ScrollMagic.Scene({
        triggerElement: this,
        duration: "70%",
        triggerHook: 0.6,
    })
        .setPin(this, {pushFollowers: false})
        .addIndicators()
        .addTo(controller);
})
