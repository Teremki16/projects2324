let c = 4
/*+ (4+a))
console.log("5 + " + a + " = " + (
console.log("1 + " + a + " = " + (1+a))
console.log("2 + " + a + " = " + (2+a))
console.log("3 + " + a + " = " + (3+a))
console.log("4 + " + a + " = " 5+a))
console.log("6 + " + a + " = " + (6+a))
console.log("7 + " + a + " = " + (7+a))
console.log("8 + " + a + " = " + (8+a))
console.log("9 * " + a + " = " + (9+a))*/
/*
console.log(Math.floor(Math.random()*100))*/
let a = Math.floor(Math.random() * 100)

console.log("Сторона квадрата " + a + " см.")

let S = a * a

console.log(`Площа квадрата зі стороною ${a} см, дорівнює ${S} см2`)

let P = a * 4

console.log("Периметр квадрата зі стороною " + a + " см, дорівнює " + P + " см")

let age = prompt("Скільки тобі років, а?")
alert(`Ти народився(лася) в ${2023 - age} році`)