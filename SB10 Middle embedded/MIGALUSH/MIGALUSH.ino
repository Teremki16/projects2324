#include<SoftwareSerial.h>
SoftwareSerial bt(2, 3); //DRX - 2, DTX - 3

char value;
void setup() {
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, INPUT);
  pinMode(12, INPUT);
  Serial.begin(9600);
  bt.begin(9600);
}

void loop() {
  checkBluetooth();
  moved();

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
  analogWrite(5, 0);
  analogWrite(6, speed);
  analogWrite(9, 0);
  analogWrite(10, speed);
}
void right(int speed) {
  analogWrite(5, speed);
  analogWrite(6, 0);
  analogWrite(9, speed);
  analogWrite(10, 0);
}
void STOP() {
  analogWrite(5, 0);
  analogWrite(6, 0);
  analogWrite(9, 0);
  analogWrite(10, 0);
}
void checkLineSensors(int left, int right) {
  Serial.print("left: " + (String)digitalRead(left) + " ");
  Serial.println("right: " + (String)digitalRead(right));
  delay(500);
}

void checkBluetooth() {
  if (bt.available()) {
    value = bt.read();
    Serial.println("Message from phone: " + (String)value);
  }
}
void forwardleft(int speed) {
  analogWrite(5, 0);
  analogWrite(6, speed);
  analogWrite(9, 0);
  analogWrite(10, 0);
}
void forwardright(int speed) {
  analogWrite(5, 0);
  analogWrite(6, 0);
  analogWrite(9, speed);
  analogWrite(10, 0);
}
void backwardright(int speed) {
  analogWrite(5, 0);
  analogWrite(6, 0);
  analogWrite(9, 0);
  analogWrite(10, speed);
}
void backwardleft(int speed) {
  analogWrite(5, speed);
  analogWrite(6, 0);
  analogWrite(9, 0);
  analogWrite(10, 0);
}
void moved() {
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
      forwardleft(255);
      break;

    case 'I':
      forwardright(255);
      break;

    case 'H':
      backwardleft(255);
      break;

    case 'J':
      backwardright(255);
      break;

    case 'S':
      STOP();
      break;
  }
}
