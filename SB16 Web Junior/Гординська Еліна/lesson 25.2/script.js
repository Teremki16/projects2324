$("input").iCheck({
    radioClass: "iradio_flat-green",
    checkboxClass: "icheckbox_flat-green",
})

$("input").on("change", function(){
    if($(".e").val() < 3 && $(".p").val() < 3){
        $("input").iCheck("disable")
    }
})