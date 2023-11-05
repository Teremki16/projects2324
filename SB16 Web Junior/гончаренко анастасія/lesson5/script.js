



// let number = +prompt("put your number")
// let i = 1
// while (number > 0) {
//     let randomNumber = Math.floor(Math.random() * 100);
//     console.log(`Random.number ${i}: ${randomNumber}`)
//     i++;
//     number--;
// }



// let max = 0
// let number;

// do{
// number = +prompt("put your number")
// if(number > max){
//     max = number
// }

// }while(number != 0)
// alert(`The biggest number is: ${max}`)


let n = +prompt("put your number")
let sum = 0

for(let i = n; i > 0; i--){
    if(n % i == 0){
        sum += i
    }
}

alert(`sum: ${sum}`)