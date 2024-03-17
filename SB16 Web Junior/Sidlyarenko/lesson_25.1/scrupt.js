$("input").iCheck({
    radioClass: "iradio_flat-pink",
    checkboxClass: "iradio_flat-pink",
})


$("input").on("change", function(){
    if($(".e").val < 3 && $(".p").val < 3){
        $("input").iCheck("disable")
    }
})