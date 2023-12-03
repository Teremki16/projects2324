#include <SoftwareSerial.h>
SoftwareSerial bt(2, 3)

chat value
void setup() {
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(11, INPUT);
  pinMode(12, INPUT);
  Serial.begin(9600);
  bt.begin(9600);
}

void loop(){
  Move;
  checkBluetooth
  
/*forward(225);
  delay(1000)
  stp();}
  delay(1000);}

  backward(225);
  delay(1000)
  stp()}
  delay(1000)

  left(225);
  delay(1000)
  stp()}
  delay(1000)

  right(225);
  delay(1000)
  stp()}
  delay(1000)

  stp(225);
  delay(1000)
  stp()}
  delay(1000)*/

}


void forward(int speed) {
  analogWrite(5, 0);
  analogWrite(6, speed);
  analogWrite(9, speed);
  analogWrite(10, 0);
}



void backward(int speed) {
  analogWrite(5, speed);
  analogWrite(6, 0);
  analogWrite(9, 0);
  analogWrite(10, speed);
}




void left(int speed) {
  analogWrite(5, speed);
  analogWrite(6, 0);
  analogWrite(9, speed);
  analogWrite(10, 0);
}




void right(int speed) {
  analogWrite(5, speed);
  analogWrite(6, 0);
  analogWrite(9, speed);
  analogWrite(10, 0);
}




void stp(int speed) {
  analogWrite(5, 0);
  analogWrite(6, 0);
  analogWrite(9, 0);
  analogWrite(10, 0);
  }



void checkLineSensrs(int left, int right){
  Serial.print("Left: "  + (String)digitalRead(left));
  Serial.println("right: "  + (String)digitalRead(right));
  delay(500);
}

void checkBlueTooth(){
if(bt.available()){
  value = bt.read():
  Serial.println('Mesege from phone: " + (String)value);
  }
}
}

void forwardleft (int speed) {
  analogWrite(5, 0);
  analogWrite(6, speed);
  analogWrite(9, 0);
  analogWrite(10, 0);

  void forwardRigt (int speed) {
  analogWrite(5, 0);
  analogWrite(6, 0);
  analogWrite(9, speed);
  analogWrite(10, 0);

  void backwardleft (int speed) {
  analogWrite(5, speed);
  analogWrite(6, 0);
  analogWrite(9, 0);
  analogWrite(10, 0);

  void backwardRigt (int speed) {
  analogWrite(5, 0);
  analogWrite(6, 0);
  analogWrite(9, 0);
  analogWrite(10, speed);

  void Move () {
    stwich(value){
      case 'F'
      forward(255);
      break;
    
      case 'B'
      backward(255);
      break;

      case 'R'
      Right(255);
      break;

       case 'L'
      left(255);
      break;

       case 'I'
      forwardRight(255);
      break;

         case 'G'
      forwardleft(255);
      break;

       case 'J'
      backwardRight(255);
      break;

         case 'H'
      backwardleft(255);
      break;

         case 'S'
      stp();
      break;

      
