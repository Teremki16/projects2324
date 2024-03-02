$("#alert").on("click", function(){
    alertify.alert("hello world!")
})

$("#confirm").on("click", function(){
    alertify.confirm("are you already 18?", (val)=>{
        if(val){
            if(val){
                alertify.success("welcome to the clab body!")
            }else{
                alertify.error("go home, dude!")
            }
        }
    })
})
$("#prompt").on("click", function(){
    alertify.prompt("what is your name?", (val, text)=>{
        if(val){
            if(val){
                alertify.success(`hello, ${text}, how are you?`)
            }else{
                alertify.error("go home, dude!")
            }
        }
    })
})


$("#focus").on("click", function(){
    alertify.set({
        buttonFocus: "cancel"
    })
    alertify.confirm("are you already 18?", (val)=>{
        if(val){
            if(val){
                alertify.success("welcome to the clab body!")
            }else{
                alertify.error("go home, dude!")
            }
        }
    })
    return
})
$("#lables").on("click", function(){
    alertify.set({
        lables: {
            ok: "файно",
            cancel: "не файно"
        },
        buttonRevers: true
    })
    alertify.success("are you already 18?", (val)=>{
        if(val){
            if(val){
                alertify.success("welcome to the clab body!")
            }else{
                alertify.error("go home, dude!")
            }
        }
    })
})

$("#standart").on("click", function(){
    alertify.log("default log")
})
$("#success").on("click", function(){
    alertify.success("success log")
})
$("#error").on("click", function(){
    alertify.error("error log")
})
$("#delay").on("click", function(){
    alertify({dalay: 10000})
    alertify.log("delay in 10 seconds log")
})