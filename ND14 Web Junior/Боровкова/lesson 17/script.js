let start = $.now()

$(document).ready(() => {
    // alert(`Time to ready: ${$.now()- start}`)
    // $("h1").click(() => {
    //     alert("nikita lox, dasha net")
    // })
    // $("p").click(() => {
    //     alert("dgfjgngbjxv")
    // })
    // $("a").click(() => {
    //     alert("link")
    // })
    $("h1, p, a").click(function (event) {
        event.preventDefault()
        let elem = event.target
        console.log("user ckliked on:", elem.tagName)
    })
    $(".show").click(() => {
        $(".text").show()
    })

    $(".hide").click(() => {
        $(".text").hide()
    })

    $(".a").click(function () {
        $(this).hide();
    })
    
    $(".showAll").click(function(){
        $(".a").show()
    })

})
