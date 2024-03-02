$("#alert").on("click",function(){
    alertify.alert("Hello world!")
})

$("#confirm").on("click",function(){
    alertify.confirm("are you already 18?", (val)=>{
        if(val){
            alertify.success("Welcome to the club body!")
        }else{
            alertify.error("Go home dude!")
        }  
    })
})


$("#prompt").on("click",function(){
    alertify.prompt("What is your name?", (val,text)=>{
        if(val){
            alertify.success(`Hello,dear ${text},how are you?`)
        }else{
            alertify.error("Go home dude!")
        }  
    });
});

$("#focus").on("click",function(){
    alertify.set({
        buttonFocus:"cancel"
    })
    alertify.confirm("What is your name?", (val,text)=>{
        if(val){
            alertify.success(`Hello,dear ${text},how are you?`)
        }else{
            alertify.error("Go home dude!")
        }  
    });
    return
});
$("#lables").on("click",function(){
    alertify.set({
        lables:{
            ok:"Файно",
            cancel:"Не файно"
        },
        buttonReverse:true
    })
    alertify.confirm("What is your name?", (val,text)=>{
        if(val){
            alertify.success(`Hello,dear ${text},how are you?`)
        }else{
            alertify.error("Go home dude!")
        }  
    });
    return
});



$("#standart").on("click",function(){
    alertify.log("default log");
})
$("#success").on("click",function(){
    alertify.success("default log");
})
$("#error").on("click",function(){
    alertify.error("default log");
})
$("#delay").on("click",function(){
    alertify.set({delay:10000})
    alertify.log("delay in 10 seconds log");
})

