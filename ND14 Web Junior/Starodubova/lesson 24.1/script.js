$("#alert").on("click", function(){
alertify.alert("Hello World!")
})

$("#confirm").on("click", function(){
   alertify.confirm("Are you ok?", (val)=>{
    if(val){
         alertify.success("Thats cool!")
    }else{
       alertify.error("Go to психолог");
    }
   }) 
})

$("#prompt").on("click", function(){
    alertify.prompt("What's your name?" ,(val,text)=>{
        alertify.success(`Hello, dear ${text}, how are you?`)
    })
    })

$("#succes").on("click", function(){
    alertify.success("Success log")
    })

$("#error").on("click", function(){
    alertify.error("Error log")
    })

$("#standart").on("click", function(){
    alertify.log("Standart log")
    })

 $("#focus").on("click", function(){
        alertify.set({
            buttonFocus: "cancel"
        })
        alertify.confirm("Are you ok?", (val)=>{
         if(val){
              alertify.success("Thats cool!")
         }else{
            alertify.error("Go to психолог");
         }
        }) 
     return
     })

     $("#labels").on("click", function(){
        alertify.set({
           labels:{
            ok: "Файно",
            cancel: "Не файно"
           },
           buttonReverse: true
        })
        alertify.confirm("Are you ok?", (val)=>{
         if(val){
              alertify.success("Thats cool!")
         }else{
            alertify.error("Go to психолог");
         }
        }) 
     return
     })

     $("#hide").on("click", function(){
        alertify.set({delay: 10000})
        alertify.log("Hide in 10 seconds log")
        })