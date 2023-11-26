#include<SoftwareSerial.h>
SoftwareSerial bt(2, 3); //RX = 2, TX = 3
int Speed = 150;
char value;
void setup() {
  bt.begin(9600);
  pinMode (5, INPUT);
  pinMode (6, INPUT);
  pinMode (7, INPUT);
  pinMode (8, INPUT);
  pinMode (9, INPUT);
  pinMode(10, INPUT);
  pinMode(11, INPUT);
  pinMode(12, INPUT);
  Serial.begin(9600); 
}

void loop() {
getBluetoothMessage();
switch (value) {
  case'F'
  forward(carSpeed);
  break;
  
  case'R'
  right(carSpeed);
  break;
  
  case'L'
  left(carSpeed);
  break;

  case'B'
  backward(carSpeed);
  break;

  case'S'
  stp();
  break;

  case'G'
  forwardLeft(carSpeed);
  break;

  case'I'
  forwardRight(carSpeed);
  break;

  case'H'
  backwardLeft(carSpeed);
  break;back

  case'J'
  backwardRight(carSpeed);
  break;
}
}
void forward(int sped) {
  analogWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, HIGH);
  digitalWrite(8, HIGH);
  digitalWrite(9, LOW);
  analogWrite(10 , sped);

}

void backward(int sped) {
  analogWrite(5, sped);
  digitalWrite(6, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, HIGH);
  analogWrite(10 , sped);
}
void left(int sped) {
  analogWrite(5, sped);
  digitalWrite(6, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
  digitalWrite(9, LOW);
  analogWrite(10 , sped);
}
void stp(int sped) {
  analogWrite(5, 0);
  digitalWrite(6, LOW);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  analogWrite(10 , 0);
}
void right(int sped) {
  analogWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
  digitalWrite(9, HIGH);
  analogWrite(10 , sped);

}
void forwardLeft() {
  analogWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  analogWrite(10 , sped);
}
void forwardRight() {
  analogWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
  digitalWrite(9, LOW);
  analogWrite(10 , sped);
}

void backwardLeft() {
  analogWrite(5, sped);
  digitalWrite(6, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  analogWrite(10 , sped);
}

void backwardRight() {
  analogWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, HIGH);
  analogWrite(10 , sped);
}
void getBluetoothMessage() {
  if (bt.available()) {
  value = bt.read();
  Serial.println("Massage from phone: " + (String));
  }
  
