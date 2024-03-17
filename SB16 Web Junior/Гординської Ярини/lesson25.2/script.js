$("input").iCheck({
    radioClass: "iradi_square-grey@2.png",
    checkboxClass: "icheckbox_square-grey@2.png",
})

$("input").on("change", function(){
    if($(".a").val() < 3 && $(".p").val() < 3){
        $("input").iCheck("disable")
    }
})