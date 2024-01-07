$(".mistake").hide()
$("#password").change(function () {
    let pass = $(this).val()
    $(".mistake").hide()
    if (pass.lenght > 8) {
        $("#length").show()
    }
    if (!pass.match(/[0-9]/)) {
        $("#number").show()
    }
    if (!pass.match(/[A-Z]/)) {
        $("#bigLetter").show()
    }
    if (!pass.match(/[A-z]/)) {
        $("#letter").show()
    }
})