// let name = prompt("Як тебе звати?", "Вася")
// let age = Number(prompt("Скільки тобі рочків?", 6))

// console.log(`Привіт, ${name}`)
// console.log(`Вітаю в своєму скрипті!`)
// console.log(`Твій рік народження ${2023 - age}`)

// let number = Number(prompt("Введіть число?"))

// console.log(`Ваше число ${number++}`);
// console.log(`Наступне ${number++}`);
// console.log(`Наступне ${number}`);

// let a = Number(prompt("Введіть довжину сторони ребра см"))

// console.log(`Куб з ребром ${a} см, має об'єм ${a ** 3} см3 та площу повної поверхні ${6 * (a ** 2)} см2`)

// let age = +prompt("Скільки тобі років?");

// if (age < 18) {
//     alert("Шуруй y школу");
// } else if (age < 21) {
//     alert("Шуруй в університет");
// } else {
//     alert("Шуруй на роботу");
// }

// let a = +prompt("put number");

// if (a % 2 == 0) {
//     alert("парне");
// } else {
//     alert("не парне");
// }
/*
let password = prompt("enter your password");
let password1 = prompt("enter your password");

if (password == password1) {
    alert("all good!");
} else {
    alert("enter your password one more time");
} */
let a = +prompt("enter your number");
let a1 = +prompt("enter your number");
let a2 = +prompt("enter your number");
let sum = 0;

if (a > 0) {
    sum = sum + a;
}
if (a1 > 0) {
    sum = sum + a1;
}
if (a2 > 0) {
    sum = sum + a2;
}
alert(`answer is ${sum}`);
