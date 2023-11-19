#include <SoftwareSerial.h>
SoftwareSerial bt(2,3);
int carSpeed = 150;
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
  Serial.print("Left: " + String(digitalRead(12)));
  Serial.println(", Right: " + String(digitalRead(11)));
  delay(500);
}
void forvard(int sped){
digitalWrite(5,LOW);
digitalWrite(6,LOW);
digitalWrite(7,HIGH);
digitalWrite(8,HIGH);
digitalWrite(9,LOW);
digitalWrite(10,sped);
  
}
void backward(int sped){
digitalWrite(5,sped);
digitalWrite(6,HIGH);
digitalWrite(7,LOW);
digitalWrite(8,LOW);
digitalWrite(9,HIGH);
digitalWrite(10,sped);
}
void left(int sped){
digitalWrite(5,sped);
digitalWrite(6,LOW);
digitalWrite(7,HIGH);
digitalWrite(8,LOW);
digitalWrite(9,HIGH);
digitalWrite(10,sped);
}

void right(int sped){
digitalWrite(5,sped);
digitalWrite(6,HIGH);
digitalWrite(7,LOW);
digitalWrite(8,HIGH);
digitalWrite(9,LOW);
digitalWrite(10,sped);
}
void stp(){
digitalWrite(5,0);
digitalWrite(6,LOW);
digitalWrite(7,LOW);
digitalWrite(8,LOW);
digitalWrite(9,LOW);
digitalWrite(10,0);
  }
void forwardLeft(int sped){
 digitalWrite(5,sped);
 digitalWrite(6,LOW);
 digitalWrite(7,HIGH);
 digitalWrite(8,LOW);
 digitalWrite(9,LOW);
 digitalWrite(10,sped);
    }
void forwardRight(int sped){
 digitalWrite(5,sped);
 digitalWrite(6,LOW);
 digitalWrite(7,LOW);
 digitalWrite(8,HIGH);
 digitalWrite(9,LOW);
 digitalWrite(10,sped);
    }
void backwardLeft(int sped){
 digitalWrite(5,sped);
 digitalWrite(6,HIGH);
 digitalWrite(7,LOW);
 digitalWrite(8,LOW);
 digitalWrite(9,LOW);
 digitalWrite(10,sped);
    }
void backwardRight(int sped){
 digitalWrite(5,sped);
 digitalWrite(6,LOW);
 digitalWrite(7,LOW);
 digitalWrite(8,LOW);
 digitalWrite(9,HIGH);
 digitalWrite(10,sped);
    }
