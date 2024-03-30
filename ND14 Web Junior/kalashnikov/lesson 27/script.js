let controller = new ScrollMagic.Controller();

let first_scene = new ScrollMagic.Scene({
    triggerElement: ".s1",
    triggerHook: 0.8,
}).setClassToggle(".s1>div", "fade-right")
.addIndicators()
.addTo(controller);

let second_scene = new ScrollMagic.Scene({
    triggerElement: ".s2",
    triggerHook: 0.8,
}).setClassToggle(".s2>div", "fade-left")
.addIndicators()
.addTo(controller);

let third_scene = new ScrollMagic.Scene({
    triggerElement: ".s3",
    triggerHook: 0.8,
}).setClassToggle(".s3>div", "fade-right")
.addIndicators()
.addTo(controller);

let fourth_scene = new ScrollMagic.Scene({
    triggerElement: ".s4",
    triggerHook: 0.8,
}).setClassToggle(".s4>div", "fade-left")
.addIndicators()
.addTo(controller);
