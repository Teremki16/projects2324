$("input").iCheck({
    radioClass: "iradio_flat-blue",
    checkboxClass: "icheckbox_flat-blue",
})


$("input").on("change", function(){
    if($(".e").val() < 3 && $(".p").val() < 3){
        $("input").iCheck("disable")
    }
})