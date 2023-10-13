// let a = +prompt("sfsdf")
// let count = 1

// while(a > 0){
//     let rand = Math.floor(Math.random()*100)
//     console.log(`Random number ${count}: ${rand}`)
//     a--;
//     count++;
// }

// let a;
// let summ = 0;

// do{
//     a = +prompt("sdfsdfsdf")
//     if(a > 0){
//         summ += a
//     }
// }while(a)

// alert(`summ of positiv numbers is: ${summ}`)

let a = +prompt("sdfsdfsdf")
let summ = 0;

for(let i = a; i > 0; i--){
    if(a % i == 0) summ += i;
}

alert(`Сума всіх дільників: ${summ}`)