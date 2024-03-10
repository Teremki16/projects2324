$("#h").knob({
    width: 300,
    height: 300,
    displayInput: false,
    thickness:0.3,
    bgColor: "#333",
    fgColor: "lightcoral",
    readOnly: true,
    min: 0,
    max: 60,
})

$("#m").knob({
    width: 200,
    height: 200,
    displayInput: false,
    thickness:0.35,
    bgColor: "#333",
    fgColor: "lightgray",
    readOnly: true,
    min: 0,
    max: 60,
})

$("#s").knob({
    width: 100,
    height: 100,
    displayInput: false,
    thickness:0.3,
    bgColor: "#333",
    fgColor: "whitesmoke",
    readOnly: true,
    min: 0,
    max: 60,
})

function clock(){
    let $h=$("#h")
    let $m=$("#m")
    let $s=$("#s")
    let d = new Date()
    let h=d.getHours()
    let m=d.getMinutes()
    let s=d.getSeconds()
    $(".h").text(h)
    $(".m").text(m)
    $(".s").text(s)
    $h.val(h).trigger("change")
    $m.val(m).trigger("change")
    $s.val(s).trigger("change")
    setTimeout("clock()", 1000)
}
clock()