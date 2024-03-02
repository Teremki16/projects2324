$("#alert").on("click", function(){
    alertify.alert("Hello world!")
})

$("#confirm").on("click", function(){
    alertify.confirm("Are you already 18?", (val)=>{
        if(val){
            alertify.success("Welcome to the body club!!")
        }else{ 
            alertify.error("Go home, dude")
        }
    })
})

$("#prompt").on("click", function(){
    alertify.prompt("What is your name?", (val, text)=>{
        if(val){
            alertify.success(`Hello, dear ${text}, nice to meet you)`)
        }else{ 
            alertify.error("=(")
        }
    });
});

$("#focus").on("click", function(){
    alertify.set({
        buttonFocus: "cancel"
    })
    alertify.confirm("Are you already 18?", (val)=>{
        if(val){
            alertify.success("Welcome to the body club!!")
        }else{ 
            alertify.error("Go home, dude")
        }
    });
    return
});
$("#lables").on("click", function(){
    alertify.set({
        lables: {
        ok: "Файно",
        cancel: "Не файно"
        },
    buttonRevers: true
    })
    alertify.confirm("Are you already 18?", (val)=>{
        if(val){
            alertify.success("Welcome to the body club!!")
        }else{ 
            alertify.error("Go home, dude")
        }
    })
})

$("#standart").on("click", function(){
  alertify.log("default log")  
})
$("#success").on("click", function(){
    alertify.success("Success Log")  
})
$("#error").on("click", function(){
    alertify.success("Error Log")  
  })
$("#delay").on("click", function(){
    alertify.set({delay: 10000})
    alertify.log("delay in 10 seconds")  
  })
