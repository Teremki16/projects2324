$(".text").click(function () {
    confirm("text:" + $("h1").text())

})
let color = {
    red: 0,
    blue: 0,
    green: 0,
}
$(".r input[type='range']").on("input", function (e) {
    color.red = $(this).val()
    $(".r input[type='text']").val(color.green)
    $("body").css({ backgroundColor: ` rgb(${color.red}, ${color.green}, ${color.blue})` })
})
$(".g input[type='range']").on("input", function (e) {
    color.green = $(this).val()
    $(".r input[type='text']").val(color.green)
    $("body").css({ backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})` })
})
$(".b input[type='range']").on("input", function (e) {
    color.blue = $(this).val()
    $(".r input[type='text']").val(color.blue)
    $("body").css({ backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})` })
})

