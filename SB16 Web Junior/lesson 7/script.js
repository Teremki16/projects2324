// let size = +prompt('how much numbers do you need?')

// let arr = []

// for(let i =0; i < size; i++){
//     arr.push(Math.floor(Math.random()*100))
// }

// console.log(arr)

// function summArray(array){
//     let sum = 0
//     for(let number of array){
//         sum += number
//     }
//     return sum
// }

// console.log(`summ of elements: ${summArray(arr)}`)


// function showArrayElem(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(`arr[${i}] = ${array[i]}`)
//     }
// }

// showArrayElem(arr)


let elements
let arr = []


do {
    elements = +prompt('input yuor number')
    if(arr.includes(elements)){
        continue
    }else {
        arr.push(elements)
    }
}while(elements)

console.log(`array without dublicates: ${arr}`)