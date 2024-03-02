$("#alert").on("click", function () {
    alertify.alert("Hello")
})

$("#confirm").on("click", function () {
    alertify.confirm("Тобі вже є 18?", (val) => {
        if (val) {
            alertify.success("Wellcome!")
        } else {
            alertify.error("Go home, dude!")
        }
    })
})

$("#prompt").on("click", function () {
    alertify.prompt("Як тебе звати?", (val, text) => {
        if (val) {
            alertify.success(`Hello, шановний ${text} б як ти?`)
        } else {
            alertify.error("Go home, dude!")
        }
    })
})

$("#focus").on("click", function () {
    alertify.set({
        buttonFocus: "cancel"
    })
    alertify.confirm("Тобі вже є 18?", (val) => {
        if (val) {
            alertify.success("Wellcome!")
        } else {
            alertify.error("Go home, dude!")
        }
    });
    return
});

$("#labels").on("click", function () {
    alertify.set({
        labels: {
            ok: "Звісно",
            cancel: "Не звісно"
        },
        buttonReverse: true
    })
    alertify.confirm("Тобі вже є 18?", (val) => {
        if (val) {
            alertify.success("Wellcome!")
        } else {
            alertify.error("Go home, dude!")
        }
    });
    return
});

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