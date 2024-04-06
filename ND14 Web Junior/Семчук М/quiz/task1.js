$(".rules").slideUp()

let answers = [
    "рибалка",
    "стіл",
    "ребус",
    "камера",
    "банан",
    "палиця",
    "рука",
    "табір",
    "свято",
    "стіна"
]

$(".slideRules").on("click", function(){
    $(".rules").slideToggle()
})