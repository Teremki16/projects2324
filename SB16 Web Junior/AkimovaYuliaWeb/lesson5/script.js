// let a=+prompt("Vedit chislo")
// let i=1
// while(a>0){
//     let randoma= Math.floor(Math.random()*100)
//     console.log(`Random number ${i}:${randoma}`)
//     i++
//     a--
// }

// let a
// let m=0
// do{
//     a=+prompt("Vedit chislo")
//     if(a>m){
//         m=a
//     }
// }while(a!=0)
// alert(`Max is: ${m}`)

let a=+prompt("Vedit chislo a:")
let b=+prompt("Vedit chislo b:")
let sum=0
for(let i=a; i<b;i++){
    if(((i**3)%10==4)||((i**3)%10==9)){
        sum++
    }
}
alert(sum)