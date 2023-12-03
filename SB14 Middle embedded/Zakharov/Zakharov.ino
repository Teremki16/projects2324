#include <SoftwareSerial.h>
SoftwareSerial bt(2, 3);
int carSpeed = 150;
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
  pinMode(12, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  getBluetoothMessage();
  switch (value) {
    case'F':
      forward (carSpeed);
      break;
    case'B':
      backward (carSpeed);
      break;
    case'L':
      left (carSpeed);
      break;
    case'R':
      right (carSpeed);
      break;
    case'S':
      stp ();
      break;
    case'G':
      forwardLeft();
      break;
    case'I':
      forwardRight();
      break;
    case'J':
      backwardRight();
      break;
    case'H':
      backwardLeft();
      break;
    case'1':
      carSpeed = 70;
      break;
    case'2':
      carSpeed = 90;
      break;
    case'3':
      carSpeed = 110;
      break;
    case'4':
      carSpeed = 130;
      break;
    case'5':
      carSpeed = 150;
      break;
    case'6':
      carSpeed = 170;
      break;
    case'7':
      carSpeed = 190;
      break;
    case'8':
      carSpeed = 210;
      break;
    case'9':
      carSpeed = 230;
      break;
    case'q':
      carSpeed = 255;
      break;
  }
}
  void forward (int sped) {
    analogWrite(5, sped);
    digitalWrite(6, LOW);
    digitalWrite(7, HIGH);
    digitalWrite(8, HIGH);
    digitalWrite(9, LOW);
    analogWrite(10, sped);
  }
  void backward (int sped) {
    analogWrite(5, sped);
    digitalWrite(6, HIGH);
    digitalWrite(7, LOW);
    digitalWrite(8, LOW);
    digitalWrite(9, HIGH);
    analogWrite(10, sped);
  }
  void right (int sped) {
    analogWrite(5, sped);
    digitalWrite(6, HIGH);
    digitalWrite(7, LOW);
    digitalWrite(8, HIGH);
    digitalWrite(9, LOW);
    analogWrite(10, sped);
  }
  void left (int sped) {
    analogWrite(5, sped);
    digitalWrite(6, LOW);
    digitalWrite(7, HIGH);
    digitalWrite(8, LOW);
    digitalWrite(9, HIGH);
    analogWrite(10, sped);
  }
  void stp () {
    analogWrite(5, sped);
    digitalWrite(6, LOW);
    digitalWrite(7, LOW);
    digitalWrite(8, LOW);
    digitalWrite(9, LOW);
    analogWrite(10, sped);
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
    if (bt.avalibe)) {
      value = bt.read();
      Serial.println("Message from phone: " + (String)value);
    }
  }
