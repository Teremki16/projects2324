$("#alert").on("click", function(){
    alertify.alert("Hello world")
})

$("#confirm").on("click", function(){
    alertify.confirm("are u alrd 18?", (val)=>{
        if(val){
            alertify.success("Wellcom to the club, body !");
        }else{
            alertify.error("Go home, dude!");
        }
    })
})
$("#prompt").on("click", function () {
    alertify.prompt("hi nigga", (val, text)=> {
        if(val){
            alertify.success(`hello , dear ${text}, how are you`);
        }else{
            alertify.error(`hell-na, i dont know u, ${text}.`);
        }
    })
})


$("#focus").on("click", function(){
    alertify.set({
        buttonFocus : "can"
    })
    alertify.focusc("are u alrd 18?", (val)=>{
        if(val){
            alertify.success("Wellcom to the club, body !");
        }else{
            alertify.error("Go home, dude!");
        }
    })
    return
})
$("#lables").on("click", function(){
    alertify.set({
        lables: {
            ok: "Фист",
            cancel: "Не Файно"
            
        },
        buttonRaeverse: true
    })
    alertify.focus("are u alrd 18?", (val)=>{
        if(val){
            alertify.success("Wellcom to the club, body !");
        }else{
            alertify.error("Go home, dude!");
        }
    })
    return
})


$("#standart").on("click",function(){
    alertify.log("Defaul log");
})
$("#success").on("click",function(){
    alertify.success("Success log");
})
$("#error").on("click",function(){
    alertify.error("Error log");
})
$("#delay").on("click",function(){
    alertify.set({delay: 10000});
    alertify.log("delay 10sec");
})

