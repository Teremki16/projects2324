let controller = new ScrollMagic.Controller()

// let headerScene = new ScrollMagic.Scene({
//     triggerElement: "header",
//     duration: "30%",
//     triggerHook: 0
// }).setPin("header", {pushFollowers: false}).addTo(controller)

// let headerScene1 = new ScrollMagic.Scene({
//     triggerElement: ".s1",
//     triggerHook: 0.3
// }).setPin("header", {pushFollowers: true}).addTo(controller)

let paralaxScene = new ScrollMagic.Scene({
    triggerElement: ".p1",
    triggerHook: 0.7,
    duration: "200%"
}).setTween(".bg1", 1, {y: "80%" , ease: Linear.easeNone}).addIndicators().addTo(controller)

let paralaxScene2 = new ScrollMagic.Scene({
    triggerElement: ".p2",
    triggerHook: 0.7,
    duration: "200%"
}).setTween(".bg2", 1, {y: "80%" , ease: Linear.easeNone}).addIndicators().addTo(controller)

let paralaxScene3 = new ScrollMagic.Scene({
    triggerElement: ".p3",
    triggerHook: 0.7,
    duration: "200%"
}).setTween(".bg3", 1, {y: "80%" , ease: Linear.easeNone}).addIndicators().addTo(controller)