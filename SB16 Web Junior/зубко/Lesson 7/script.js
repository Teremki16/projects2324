// let count = +prompt("How many numberrs do u need ")
// let arr = []

// for(let i = 0; i < count; i++){
//     let number= Math.floor(Math.random()*100)
//     arr.push(number)
// }

// console.log(arr)

// function summArray(array){
//     let summ= 0; 
//     for(let number of array){
//     summ += number;
//     }
//     return summ
// }

// console.log(`summ of elements arrayn${summArray(arr)}`)


// function showArray(array){
//     for(let i = 0; i< array.length; i++){
//         console.log(`arr[${i}] = ${array[i]}`)
//     }

// }


// showArray(arr)


let arr = []
let number;

do{
    number = +prompt("input your number")
    if(number == "" || number == null || arr.includes(number)){
        continue
    }
    else{
        arr.push(number)
    }
}while(number)


console.log(arr)

