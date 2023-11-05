// let size = +prompt("how mush number do yu need malenke chmo?")

// let arr = [];

// for(let i = 0; i < size; i++){
//     arr.push(Math.floor(Math.random()*100));
// }

// console.log(arr)

// function summArray(array){
//     let sum = 0;
//     for(let number of array){
//         sum += number
//     }
//     return sum
// }

// console.log(`Summ of elements: ${summArray(arr)}`)


// function showArrayElem(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(`arr[${i} = ${array[i]}`)
//     }

// }

// showArrayElem(arr)

let elem;
let arr = []


do {
    elem = +prompt("input your number")
    if(arr.includes(elem)){

        continue
        
    }else {
        arr.push(elem)
    }
}while(elem)

console.log(`array without dublicates vid malenkogo chma: ${arr}`)