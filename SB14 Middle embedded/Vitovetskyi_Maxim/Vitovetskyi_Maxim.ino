#include <SoftwareSerial.h>
SoftwareSerial bt (2, 3);
int carSpeed = 150;

void setup() {
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(12, OUTPUT);
  
}

void loop() {
  //forward(carSpeed);
  backward(carSpeed);
}
void forward(int sped){
  analogWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, HIGH);
  digitalWrite(8, HIGH);
  digitalWrite(9, LOW);
  digitalWrite(10, sped);
  
  }
void backward(int sped){
  analogWrite(5, sped);
  digitalWrite(6, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, HIGH);
  digitalWrite(10, sped);
}
void left(int sped){
  analogWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
  digitalWrite(9, HIGH);
  digitalWrite(10, sped);
  }
  void righ(int sped){
  analogWrite(5, sped);
  digitalWrite(6, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
  digitalWrite(9, LOW);
  digitalWrite(10, sped);
  }
  void stp(int sped){
    analogWrite(5, sped);
  digitalWrite(6, LOW);
  digitalWrite(7, LOW);
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  digitalWrite(10, sped);
  }
