/*let number = +prompt ("Put your number")

let sum= 0

for(let i =number ; i>0 ; i --){
    if (number % i == 0) sum +=i 
}

alert ("sum is" + sum)*/

/*let number1 = +prompt ("Put your number 1")

let number2 = +prompt ("Put your number 2")
let count = 0 
for(let i= number1; i <= number2; i++){
    let n = (i**3) % 10
    if (n == 4  || n == 9) count++
}
alert ("count " + count)*/

let m = +prompt("Put your number")

let p = +prompt("put your number 2")
 
let n= +prompt ("Days")

console.log (`Спочатку було ${m} осіб їх відсоток зростання протягом ${n} днів складає ${p}`)

for (let i= 1; i<n; i++){
  m+=m*(p/100)
  console.log(`День ${i} популяія ${m} `)
}