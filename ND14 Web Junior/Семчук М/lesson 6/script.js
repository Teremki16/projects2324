//let side = +prompt("input box size")

function draw_box(){
    for(let i = 0; i < side; i++){
        let str = ""
        for(let j= 0; j < side; j++){
            str +="  *";
        }
        console.log(str)
    }
}

function draw_triangle(){
    for(let i = 1; i < side + 1; i++){
        let str = ""
        for(let j= 0; j < i; j++){
            str +="  *";
        }
        console.log(str)
    }
}

//draw_triangle()

//let km = +prompt("Введіь км")


//function km_to_miles(kill) {
//   return kill * 0.6214
//}
//alert(km_to_miles(km) + "miles moralis")


//function get_month_days(month){
//   if(month > 0 && month < 13){
 //       if(month == 2){
  //          return 28
//        }
//        else if(month == 4 || month == 6 || month == 9 || month == 11){
 //           return 30
 //       }
 //       else {
 //           return 31
 //       }
 //   }
 //  else {
  //      alert("Корстувач дурачок")
   // }
//}
//let m = +prompt ("What is month?")
//alert(`B ${m} місяці ${get_month_days(m)} днів`)

 /*let width= +prompt("ширина")
 let height= +prompt("висота")
 let depth= +prompt("глибина")
 function v(w, h, d){
    return w*h*d*
 }
 alert (`кімната з шириною ${width} м, висотою ${height} м та глибиною ${depth} м, має об'єм ${v(width, height, depth)} м^3`);*/

 let a =+prompt("Number 1")
 let operator = prompt("Operator");
 let b =+prompt("Number 2")
 function plus(a,b){
    return a+b
 }
 function minus(a,b){
    return a-b
 }
 function multi(a,b){
    return a*b
 }
 function divide(a,b){
    if(b!=0){
    return a+b
    } else {
        return 0;
    }
 }

switch(operator){
    case "+":
        alert(`${a} ${operator} ${b} =${plus(a,b)}`)
        break;
}
switch(operator){
    case "-":
        alert(`${a} ${operator} ${b} =${minus(a,b)}`)
        break;
}
switch(operator){
    case "*":
        alert(`${a} ${operator} ${b} =${multi(a,b)}`)
        break;
}
switch(operator){
    case "/":
        alert(`${a} ${operator} ${b} =${devide(a,b)}`)
        break;
}
