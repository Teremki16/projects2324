let controller = new ScrollMagic.Controller();

let wipeAnimation = new TimelineMax()
    .fromTo(".s2", { x: "-100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo(".s3", { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo(".s4", { y: "-100%" }, { y: "0%", ease: Linear.easeNone });

new ScrollMagic.Scene({
    triggerElement: "main",
    triggerHook: "onLeave",
    duration: "300%",
})
    .setPin("main")
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller)
