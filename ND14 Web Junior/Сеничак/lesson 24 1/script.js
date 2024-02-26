$("#alert").on("click", function () {
    alertify.alert("Hello world!");
});

$("#confirm").on("click", function () {
    alertify.confirm("are you already 18?", (val) => {
        if (val) {
            alertify.success("Wellcome to the club, body!");
        } else {
            alertify.error("Go home, dude!");
        }
    });
});

$("#prompt").on("click", function () {
    alertify.prompt("What is your name?", (val, text) => {
        if (val) {
            alertify.success(`Hello, dear ${text}, how are you?`);
        } else {
            alertify.error(`Hell-na, I dont know u, ${text}.`);
        }
    });
});



$("#focus").on("click", function () {
    alertify.set({
        buttonFocus: "cancel"
    })
    alertify.confirm("are you already 18?", (val) => {
        if (val) {
            alertify.success("Wellcome to the club, body!");
        } else {
            alertify.error("Go home, dude!");
        }
    });
    return
});
$("#labels").on("click", function () {
    alertify.set({
        labels: {
            ok: "Файно",
            cancel: "Не файно"
        },
        buttonReverse: true
    })
    alertify.confirm("are you already 18?", (val) => {
        if (val) {
            alertify.success("Wellcome to the club, body!");
        } else {
            alertify.error("Go home, dude!");
        }
    });
    return
});


$("#standart").on("click", function(){
    alertify.log("Default log")
})
$("#success").on("click", function(){
    alertify.success("Success log")
})
$("#error").on("click", function(){
    alertify.error("Error log")
})
$("#delay").on("click", function(){
    alertify.set({delay: 10000})
    alertify.log("delay in 10 seconds log")
})

