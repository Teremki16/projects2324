#include <SoftwareSerial.h>
SoftwareSerial bt(2, 3); //RX = 2, TX = 3
int carSpeed = 255;
char value;
void setup() {
  bt.begin(9600);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, INPUT);
  pinMode(12, INPUT);
  Serial.begin(9600);
}

void loop(){
    //checkLineSensors();
    //Move();
    forward(255);
}

void checkLineSensors(){
  Serial.println("Left: " + (String)digitalRead(11));
  Serial.println("Right: " + (String)digitalRead(12));
  delay(500);
}

void Move() {
  getBluetoothMessage();
  switch (value) {
    case 'F':
      forward(carSpeed);
      break;

    case 'B':
      backward(carSpeed);
      break;

    case 'L':
      left(carSpeed);
      break;

    case 'R':
      right(carSpeed);
      break;

    case 'S':
      stp();
      break;

    case 'G':
      forwardLeft(carSpeed);
      break;

    case 'I':
      forwardRight(carSpeed);
      break;

    case 'H':
      backwardLeft(carSpeed);
      break;

    case 'J':
      backwardRight(carSpeed);
      break;

    case '1':
      carSpeed = 70;
      break;

    case '2':
      carSpeed = 90;
      break;

    case '3':
      carSpeed = 110;
      break;

    case '4':
      carSpeed = 130;
      break;

    case '5':
      carSpeed = 150;
      break;

    case '6':
      carSpeed = 170;
      break;

    case '7':
      carSpeed = 190;
      break;

    case '8':
      carSpeed = 210;
      break;

    case '9':
      carSpeed = 230;
      break;

    case 'q':
      carSpeed = 255;
      break;
  }

}
void forward(int sped) {
  analogWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, HIGH);
  digitalWrite(8, HIGH);
  digitalWrite(9, LOW);
  analogWrite(10, sped);

}
void backward(int sped) {
  analogWrite(5, sped);
  digitalWrite(6, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, HIGH);
  analogWrite(10, sped);
}
void left(int sped) {
  analogWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
  digitalWrite(9, HIGH);
  analogWrite(10, sped);
}
void right(int sped) {
  analogWrite(5, sped);
  digitalWrite(6, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
  digitalWrite(9, LOW);
  analogWrite(10, sped);
}
void stp() {
  analogWrite(5, 0);
  digitalWrite(6, LOW);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  analogWrite(10, 0);
}
void forwardLeft(int sped) {
  analogWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  analogWrite(10, sped);
}
void forwardRight(int sped) {
  analogWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
  digitalWrite(9, LOW);
  analogWrite(10, sped);
}
void backwardLeft(int sped) {
  analogWrite(5, sped);
  digitalWrite(6, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  analogWrite(10, sped);
}
void backwardRight(int sped) {
  analogWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, HIGH);
  analogWrite(10, sped);
}
void getBluetoothMessage() {
  if (bt.available()) {
    value = bt.read();
    Serial.println("Message from phone: " + (String)value);
  }

}
