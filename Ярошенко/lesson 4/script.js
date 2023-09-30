/*let number = +promt ("put your number")
let one= number%10
let ten= Math.floor((number%100)/10)
let hund= Math.floor((number%1000)/100)
let th = Math.floor(number/1000)

if(th+one==hund-ten){
    alert("yes")
} else {
     alert ("no")
}*/

/*let number = +prompt("put your number")
if(number%17==0 || number%7==0) {
    akert("число гарне")
} else {
    alert("число не гарне")
}*/

/*let year = +promt("enter year")
If ((year%4 ==0 && year%100!=0) || year%400==0) {
    Alert
} ("Високоснй рік"){
  else("Не високосний")
}

let count = +prompt ("Скільки разів згенерувати число?")
let i = 1
while(count>0){
    console.log( `Випадкове число номер ${i}${Math.floor(Math.random()*100)}`)
    count--
    i ++
}*/
let number;
let number_max=0
do{
    number=+prompt("utdi")
    if(number>number_max){
        number_max= number
    }
}while(number == 0)

alert ("max number was" + number_max)