$(document).ready(function () {
  //ScrollMagic controller init
  let controller = new ScrollMagic.Controller();

  // Write your code here
let f_s = new ScrollMagic.Scene({
  triggerElement: ".item1",
  triggerHook: 0.7,
}).setClassToggle(".item1 .item-image", "fade-left").addIndicators().addTo(controller);
let s_s = new ScrollMagic.Scene({
  triggerElement: ".item2",
  triggerHook: 0.7,
}).setClassToggle(".item2 .item-image", "fade-right").addIndicators().addTo(controller);
let t_s = new ScrollMagic.Scene({
  triggerElement: ".item3",
  triggerHook: 0.7,
}).setClassToggle(".item3 .item-image", "fade-left").addIndicators().addTo(controller);

let f_s1 = new ScrollMagic.Scene({
  triggerElement: ".item1",
  triggerHook: 0.7,
}).setClassToggle(".item1 .content", "fade-right").addIndicators().addTo(controller);
let s_s1= new ScrollMagic.Scene({
  triggerElement: ".item2",
  triggerHook: 0.7,
}).setClassToggle(".item2 .content", "fade-left").addIndicators().addTo(controller);
let t_s1= new ScrollMagic.Scene({
  triggerElement: ".item3",
  triggerHook: 0.7,
}).setClassToggle(".item3 .content", "fade-right").addIndicators().addTo(controller);

});
