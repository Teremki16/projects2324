/*let number = +prompt("put your number")
let sum = 0

for( let i=number; i>0; i--){
  if (number % i==0) sum += i; 
}
alert ("sum is debtor "+ sum) 

let number = +prompt("enter your nember")
let number2 = +prompt ("enter your another number")
let count = 0

for (let i = number; i<=number2; i++) {
    let a = (i**3)% 10
    if ( a==4 || a==9)count++
}
alert("the result is " + count) */

let m = +prompt("кількість організмів")
let p = +prompt("відсоток збільшення")
let n = +prompt("кількість днів розмноження")

console.log (`спочатку було ${m} осіб їх відсоток зростання складає ${p} протягом ${n} днів`)
for (let i= 1; i<n; i++){
   m+=m*(p/100)
   console.log (`день  ${n} популяція ${m}`)
}