let controller = new ScrollMagic.Controller();

let headerScene = new ScrollMagic.Scene({
    triggerElement: "header",
    triggerHook: 0,
    duration: "10%"
}).setPin("header", {
    pushFollowers: false
}).addTo(controller);


let headerScene2 = new ScrollMagic.Scene({
    triggerElement: ".s1",
    triggerHook: 0.3,
}).setPin("header", {
    pushFollowers: false
}).addTo(controller);



$("section").each(function () {
    let scene1 = new ScrollMagic.Scene({
        triggerElement: this,
        duration: "200%",
        triggerHook: 0,

    })
        .setPin(this, { pushFollowers: false })
        .addIndicators()
        .addTo(controller);
}
)