#include <SoftwareSerial.h>
SoftwareSerial bt (2, 3); // DRX- 2,DRX - 3

char value;
void setup() {
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, INPUT);
  pinMode(12, INPUT);
  Serial.begin(9600);
}

void loop() {
  checkBlueTooth();
  Move();
  /*forward(255);
    delay(1000);
    stp();
    delay(1000);


    backward(255);
    delay(1000);
    stp();
    delay(1000);

    left(255);
    delay(1000);
    stp();
    delay(1000);

    right(255);
    delay(1000);
    stp();
    delay(1000);
  */
}
void forward(int speed) {
  analogWrite(5, 0);
  analogWrite(6,  speed);
  analogWrite(9,  speed);
  analogWrite(10, 0);
}
void backward(int speed) {
  analogWrite(5, speed);
  analogWrite(6,  0);
  analogWrite(9,  0);
  analogWrite(10, speed);
}
void left(int speed) {
  analogWrite(5, 0);
  analogWrite(6,  speed);
  analogWrite(9, 0);
  analogWrite(10, speed);
}
void right(int speed) {
  analogWrite(5, speed);
  analogWrite(6,  0);
  analogWrite(9, speed);
  analogWrite(10, 0);
}
void stp() {
  analogWrite(5, 0);
  analogWrite(6,  0);
  analogWrite(9, 0);
  analogWrite(10, 0);
}
void forwardLeft (int speed) {
  analogWrite(5, 0);
  analogWrite(6,  speed);
  analogWrite(9,  0);
  analogWrite(10, 0);
}
void forwardRight (int speed) {
  analogWrite(5, 0);
  analogWrite(6,  0);
  analogWrite(9,  speed);
  analogWrite(10, 0);
}
void backwardLeft(int speed) {
  analogWrite(5, speed);
  analogWrite(6,  0);
  analogWrite(9,  0);
  analogWrite(10, 0);
}
void backwardRight(int speed) {
  analogWrite(5, 0);
  analogWrite(6,  0);
  analogWrite(9,  0);
  analogWrite(10, speed);
}
void checkLineSencors(int left, int right) {
  Serial.print("Left: " + (String)digitalRead(left) + " ");
  Serial.println("Right: " + (String)digitalRead(right));
  delay(500);
}

void checkBlueTooth() {
  if (bt.available()) {
    value = bt.read();
    Serial.println("Mesage from phone" + (String)value);
  }
}

void Move() {
  switch (value) {
    case 'F':
      forward(255);
      break;

    case 'B':
      backward(255);
      break;

    case 'R':
      right(255);
      break;

    case 'L':
      left(255);
      break;

    case 'G':
      forwardLeft(255);
      break;

    case 'I':
      forwardRight(255);
      break;

    case 'H':
      backwardLeft(255);
      break;

    case 'J':
      backwardRight(255);
      break;

    case 'S':
      stp();
      break;
  }
}
