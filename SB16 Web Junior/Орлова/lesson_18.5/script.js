$(".mistake").hide()
$("#password").change(function () {
    let pass = $(this).val()
    $(".mistake").hide()
    if (pass.length < 8) {
        $("#length").show()
    }
    if (!pass.match(/[0-9]/)) {
        $("#letter").show()
    }
    if (!pass.match(/[A-Z]/)) {
        $("#bigLetter").show()
    }
    if (!pass.match(/[A-z]/)) {
        $("#letter").show()
    }
})