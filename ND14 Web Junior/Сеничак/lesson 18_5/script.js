$(".mistake").hide();

$("#password").change(function () {
    let pass = $(this).val();
    $(".mistake").hide();
    if (pass.length < 8) {
        $(".mistake:nth-child(4)").show();
    }
    if (!pass.match(/[A-z]/)) {
        $(".mistake:nth-child(1)").show();
    }
    if (!pass.match(/[A-Z]/)) {
        $(".mistake:nth-child(2)").show();
    }
    if (!pass.match(/[0-9]/)) {
        $(".mistake:nth-child(3)").show();
    }
});


$(".header").click(function(){
    $(".content").slideToggle("fast")
})
