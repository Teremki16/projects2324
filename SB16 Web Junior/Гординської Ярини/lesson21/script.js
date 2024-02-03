// let team1 = 1
// let team2 = 1

// $(".t1").on("click", () => {
//     let name = $("input").val();
//     $(".tt1:last-child").after(`<div class="tt1">${team1}. ${name}</div>`)
//     $("input").val("");
//     team1++
// });
// $(".t2").on("click", () => {
//     let name = $("input").val();
//     $(".tt2:last-child").after(`<div class="tt2">${team2}. ${name}</div>`)
//     $("input").val("");
//     team2++
// });

$(".remove").on("click", function(){
    let elem = $("input[type='text']").val()
    $(elem).remove()
})