let controller = new ScrollMagic.Controller()

let fisrt_scene = new ScrollMagic.Scene({
    triggerElement: ".s1",
    triggerHook: 0.8,
}).setClassToggle(".s1 .content", "fade-left").addIndicators().addTo(controller);

let second_scene = new ScrollMagic.Scene({
    triggerElement: ".s2",
    triggerHook: 0.8,
}).setClassToggle(".s2 .content", "fade-right").addIndicators().addTo(controller);

let third_scene = new ScrollMagic.Scene({
    triggerElement: ".s3",
    triggerHook: 0.8,
}).setClassToggle(".s3 .content", "fade-left").addIndicators().addTo(controller);

let fourth_scene = new ScrollMagic.Scene({
    triggerElement: ".s4",
    triggerHook: 0.8,
}).setClassToggle(".s4 .content", "fade-right").addIndicators().addTo(controller);