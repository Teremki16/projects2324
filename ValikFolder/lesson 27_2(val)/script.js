let controller = new ScrollMagic.Controller();

let pscene = new ScrollMagic.Scene({
    triggerElement: ".paralax1",
    trggerHook: 0.7,
    duration: "200%"

}).setTween(".bg1", 1, {y: "80%", ease: Linear.easeNone}).addIndicators().addTo(controller)

let pscene2 = new ScrollMagic.Scene({
    triggerElement: ".paralax1",
    trggerHook: 0.7,
    duration: "200%"

}).setTween(".bg2", 1, {y: "80%", ease: Linear.easeNone}).addIndicators().addTo(controller)


let pscene3 = new ScrollMagic.Scene({
    triggerElement: ".paralax1",
    trggerHook: 0.7,
    duration: "200%"

}).setTween(".bg3", 1, {y: "80%", ease: Linear.easeNone}).addIndicators().addTo(controller)
