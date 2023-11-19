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
  pinMode(12, INPUT);
  Serial.begin(9600);
}

void loop() {
  getBluetoothMassage();
  switch (value) {
    case 'F':
      forward(carSpeed);
      break;

    case 'B':
      forward(carSpeed);
      break;

    case 'L':
      forward(carSpeed);
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

      case 'q':
      carSpeed = 255;
      break;

      case '1':
      carSpeed = ;
      break;
  }


}
void forward(int sped) {
  digitalWrite(5, LOW);
  digitalWrite(6, LOW);
  digitalWrite(7, HIGH);
  digitalWrite(8, HIGH);
  digitalWrite(9, LOW);
  digitalWrite(10, sped);
}
void backward(int sped) {
  digitalWrite(5, sped);
  digitalWrite(6, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, HIGH);
  digitalWrite(10, sped);
}
void left(int sped) {
  digitalWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
  digitalWrite(9, HIGH);
  digitalWrite(10, sped);
}

void right(int sped) {
  digitalWrite(5, sped);
  digitalWrite(6, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
  digitalWrite(9, LOW);
  digitalWrite(10, sped);
}
void stp() {
  digitalWrite(5, 0);
  digitalWrite(6, LOW);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  digitalWrite(10, 0);
}
void forwardLeft(int sped) {
  digitalWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  digitalWrite(10, sped);
}
void forwardRight(int sped) {
  digitalWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
  digitalWrite(9, LOW);
  digitalWrite(10, sped);
}
void backwardLeft(int sped) {
  digitalWrite(5, sped);
  digitalWrite(6, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  digitalWrite(10, sped);
}
void backwardRight(int sped) {
  digitalWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, HIGH);
  digitalWrite(10, sped);
}
void getBluetoothMassage() {
  if (bt.available()) {
    value = bt.read();
    Serial.println("Message from phone: " + (String)value);
  }
}
