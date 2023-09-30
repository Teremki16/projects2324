/*
let number = 2

console.log("1 *"+number+"=" + 1 * number);
console.log("2 *"+number+"=" + 2 * number);
console.log("3 *"+number+"=" + 3 * number);
console.log("4 *"+number+"=" + 4 * number);
console.log("5 *"+number+"=" + 5 * number);
console.log("6 *"+number+"=" + 6 * number);
console.log("7 *"+number+"=" + 7 * number);
console.log("8 *"+number+"=" + 8 * number);
console.log("9 *"+number+"=" + 9 * number);
*/

let a = Math.floor(Math.random()*100)
let b = Math.floor(Math.random()*100)

console.log(`Сторона квадрата дорівнює ${a}см`)
console.log(`Сторона квадрата дорівнює ${b}см`)

let P = (a+b)* 2;

console.log(`Периметр квадрата з сторонами ${a} та стороною ${b} має периметр ${P} см`)

let name = prompt ("Як тебе звати?","Вова")
alert(`Привіт ${name},як у тебе справи?`)