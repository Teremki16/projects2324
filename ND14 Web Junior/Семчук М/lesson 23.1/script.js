$("button").on("click", function(){
    let w = $("#width").val()
    let h = $("#height").val()
    if(w.search("%") != -1){
        $(".box").width(w)
    }else if (w.search("px") != -1){
        $(".box").width(w.slice(0, -2))
    }

    if(h.search("%") != -1){
        $(".box").height(h)
    }else if (h.search("px") != -1){
        $(".box").height(h.slice(0, -2))
    }
})
