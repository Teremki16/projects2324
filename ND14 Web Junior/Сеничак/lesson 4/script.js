// let number = +prompt("put your number");

// let one = number % 10;
// let ten = Math.floor((number % 100) / 10);
// let hund = Math.floor((number % 1000) / 100);
// let th = Math.floor(number / 1000);

// if (th + one == hund - ten) {
//     alert("yes");
// } else {
//     alert("no");
// }

// let number = +prompt("Number?");
// if (number % 7 == 0 || number % 17 == 0) {
//     alert("Число гарне");
// } else {
//     alert("Число не гарне");
// }

// let year= +prompt("enter a year")
// if ((year%4 ==0 && year%100!=0)||year%400==0){
//     alert("високосний")
// } else {
//     alert("не високосний")
// }
// let count = +prompt("Скільки разів згенерувати число?");
// let i = 1;
// while(count > 0){
//     console.log(`Випадкове число номер ${i} :${Math.floor(Math.random()*100)}`);
//     count--;
//     i++;
// }

let number;
let number_max = 0;
do {
    number = +prompt("gdg");
    if (number > number_max) {
        number_max = number;
    }
} while (number != 0);

alert("max number was " + number_max);
