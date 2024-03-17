let controller =new ScrollMagic.Controller()

let headerScene= new ScrollMagic.Scene({
    triggerElement:"header",
    triggerHook:0,
    duration:"10%",
}).setPin("header",{
    pushFollowers:false,//можна переїжати
}).addIndicators().addTo(controller)
// let scene1= new ScrollMagic.Scene({
//     triggerElement:".s1"
// }).setClassToggle(".s1","fadeIn")
// .addIndicators()
// .addTo(controller);

// let scene2= new ScrollMagic.Scene({
//     triggerElement:".s2"
// }).setClassToggle(".s2","fadeIn")
// .addIndicators()
// .addTo(controller);

// let scene3= new ScrollMagic.Scene({
//     triggerElement:".s3"
// }).setClassToggle(".s3","fadeIn")
// .addIndicators()
// .addTo(controller);скорочуємо

$("section").each(function(){
    let scene1= new ScrollMagic.Scene({
    triggerElement:this,
    duration:"200%",//тривалість
    triggerHook:0,
})//.setClassToggle(this,"fadeIn")
.setPin(this,{
    pushFollowers:false
})
.addIndicators()
.addTo(controller);
});
