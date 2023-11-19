#include <SoftwareSerial.h>
SoftwareSerial bt(2, 3)
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
  checkLineSensors(11, 12);
  
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
