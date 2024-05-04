$(document).ready(function () {
  //ScrollMagic controller init
  let controller = new ScrollMagic.Controller();

  let first_scene = new ScrollMagic.Scene({
    triggerElement: ".item1",
    triggerHook: 0.8,
  }).setClassToggle(".item1  .item-image", "fade-left")
  .addTo(controller)


  let first_scene1 = new ScrollMagic.Scene({
    triggerElement: ".item1",
    triggerHook: 0.8,
  }).setClassToggle(".item1  .content", "fade-right")
    .addTo(controller);

  let second_scene = new ScrollMagic.Scene({
    triggerElement: ".item2",
    triggerHook: 0.8,
  }).setClassToggle(".item2  .item-image", "fade-right")
  .addTo(controller)


  let second_scene1 = new ScrollMagic.Scene({
    triggerElement: ".item2",
    triggerHook: 0.8,
  }).setClassToggle(".item2  .content", "fade-left")
    .addTo(controller);

    
  let third_scene = new ScrollMagic.Scene({
    triggerElement: ".item3",
    triggerHook: 0.8,
  }).setClassToggle(".item3  .item-image", "fade-left")
  .addTo(controller)


  let third_scene1 = new ScrollMagic.Scene({
    triggerElement: ".item3",
    triggerHook: 0.8,
  }).setClassToggle(".item3  .content", "fade-right")
    .addTo(controller);
})