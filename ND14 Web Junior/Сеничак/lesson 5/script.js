// let number = +prompt("Put your number")
// let sum = 0;

// for(let i = number; i > 0; i--){
//     if(number % i == 0) sum += i;
// }
// alert("summ is" + sum)

let number1 = +prompt("Your number 1?");
let number2 = +prompt("Your number 2?");
let count = 0;

for (let i = number1; i <= number2; i++) {
    let n = i ** 3 % 10;
    if (n == 4 || n == 9) count++;
}
alert("count " + count);

// let m = +prompt("Початкова кількість");
// let p = +prompt("Відсотоок зростання");
// let n = +prompt("Кількість днів");

// console.log(
//     `Спочатку було ${m}  осіб їх відсоток зростання протягом  ${n} днів складає${p}`
// );
// for (let i = 1; i < n; i++) {
//     m += m * (p / 100);
//     console.log(`День ${i} популяція ${m}`);
// }
