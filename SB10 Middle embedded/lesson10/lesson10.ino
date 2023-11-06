#include <SoftwareSerial.h>

SoftwareSerial bt(2, 3); //RXD = 3, TXD = 2

int speed = 255;

void setup() {
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(12, OUTPUT);
}

void loop() {
  checkLineSensors(11,12);
}

void forward() {
  speed = 255;
  digitalWrite(4, LOW);
  analogWrite(5, speed);
  analogWrite(6, speed);
  digitalWrite(7, LOW);
}

void secret() {
  speed = 255;
  digitalWrite(4, HIGH);
  analogWrite(5, 255 - speed);
  analogWrite(6, 255 - speed);
  digitalWrite(7, HIGH);
}

void left() {
  speed = 200;
  digitalWrite(4, LOW);
  analogWrite(5, speed);
  analogWrite(6, 255 - speed);
  digitalWrite(7, HIGH);
}

void right() {
  speed = 255;
  digitalWrite(4, HIGH);
  analogWrite(5, 255 - speed);
  analogWrite(6, speed);
  digitalWrite(7, LOW);
}

void stp() {
  speed = 0;
  digitalWrite(4, LOW);
  analogWrite(5, speed);
  analogWrite(6, speed);
  digitalWrite(7, LOW);
}

void checkLineSensors(int left, int right) {
  Serial.print("Left: " + String(digitalRead(left)));
  Serial.println("Right: " + String(digitalRead(right)));
  delay(1000);
}
