$("#h").knob({
    max: 24,
    width: 300,
    height: 300,
    displayInput: false,
    thickness: 0.3,
    bgColor: "gray",
    fgColor: "rgb(197, 213, 159)",
    readOnly: true
})
$("#m").knob({
    max: 60,
    width: 200,
    height: 200,
    displayInput: false,
    bgColor: "gray",
    fgColor: "rgb(159, 213, 166)",
    readOnly: true
})

$("#s").knob({
    max: 60,
    width: 100,
    height: 100,
    displayInput: false,
    thickness: 0.5,
    bgColor: "gray",
    fgColor: "rgb(159, 213, 203)",
    readOnly: true
})

function clock(){
    let d = new Date()
    let $h = $("#h")
    let $m = $("#m")
    let $s = $("#s")
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    $h.val(h).trigger("change")
    $m.val(m).trigger("change")
    $s.val(s).trigger("change")
    $(".h").text(h)
    $(".m").text(m)
    $(".s").text(s)
    setTimeout("clock()", 1000)
}
clock()