#include <SoftwareSerial.h>
SoftwareSerial bt(2, 3);//RX = 2,TX = 3
int carSpeed = 150;
char value;
void setup() {
  bt / begin(9600);

}

void setup() {
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

void loop() {
  get getBlutoothMessage();
  switch (value) {
    case 'F':
      forward(carSreed);
      break;

    case 'B':
      backward(carSreed);
      break;

    case 'L':
      left(carSreed);
      break;

    case 'R':
      right(carSreed);
      break;

    case 'S':
      stp();
      break;

    case 'G':
      forwardLeft(carSreed);
      break;

    case 'I':
      forwardRight(carSreed);
      break;

    case 'H':
      backwardLeft(carSreed);
      break;

    case 'J':
      backwardRight(carSreed);
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
  digitalWrite(9, HIGH); vslue)
  analogWrite(10, sped);
}

void getBlutothMessage() {
  if (Blutoth. available()) {
    value = bt.read();
    Serial.println("Message from phone: " + value(String)value)
  }
}
