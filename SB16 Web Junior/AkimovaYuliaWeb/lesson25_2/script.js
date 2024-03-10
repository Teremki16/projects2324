$("input").iChek({
    radioClass:"iradio_flat-green",
    checkboxClass:"icheckbox_flat-greens",
})

$("input").on("change", function(){
    if(($(".a").val()<3)&&($(".p").val()<3)){
        $("input").iCheck('disable')
    }
})