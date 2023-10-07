//let number = +prompt("число сюда")
//let sum =0

//for (let i = number ; i > 0; i--){
    //if(number % i == 0) sum += i ;
//}
//alert("summ is" + sum)//
// 
// let number1= +prompt("твоє число 1?")
// let number2= +prompt("твоє число 400?")


// for(let i = number1; i<=number2; i++){
// let n = (i**3)% 10
// if (n==4 || n==9) count++/
// }
// alert("count" + count)



let m= +prompt("Початкова кількість")
let p= +prompt("відсоток зростання")
let n= +prompt("кількість днів")

console.log(`спочатку було ${}осіб їх відсотків зростання простягом ${n} днів складає${p}`)
for (let i =1; i<n ; i ++){
    m+=m*(p/100)
console.log(`день ${i} популяція ${m}`)
}
