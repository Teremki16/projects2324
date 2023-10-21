// let size = +prompt("how much numbers do you need?")

// let arr = []

// for(let i = 0; i < size; i++){
//     arr.push(Math.floor(Math.random()*100));
// }

// console.log(arr)

// function summArray(array){
//     let summ = 0;
//     for(let number of array){
//         summ += number
//     }
//     return summ
// }

// console.log(`Summ of elements: ${summArray(arr)}`)


// function showArrayElem(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(`arr[${i}] = ${array[i]}`)
//     }
// }

// showArrayElem(arr)


let elem;
let arr = []


do {
    elem = +prompt("imput your number")
    if (arr.includes(elem)) {
        continue
    } else {
        arr.push(elem)
    }
} while (elem)

console.log(`array without dublicates: ${arr}`)