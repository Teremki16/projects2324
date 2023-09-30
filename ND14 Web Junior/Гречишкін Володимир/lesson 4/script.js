//let number= +prompt("Number?")
//if(number%7== 0 || number%17 ==0){
//alert("Число гарне")
//} else{
//alert("Число не гарне")
//}

//let year =+prompt("enter a year")
//if ((year%4 ==0 & year%100!=0)||year%400==0){
//alert("Рік високозний")
//}else{
//alert("Рік не високозний")
//}

//let count = +prompt("Скільки разів згенерувати число");
//let i = 1;
//while(count > 0){
    //console.log(`Виепадкове число номер${i}:${Math.floor(Math.random()*100)}`)
    //count--
    //i++
//}
let number;
let number_max=0
do{
    number=+prompt("Ein zwei polizei")
    if(number>number_max){
        number_max=number
    }
}while(number==0)
alert("number_max was"+ number_max);
