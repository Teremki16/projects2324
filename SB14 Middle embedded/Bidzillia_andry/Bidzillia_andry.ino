#include <SoftwareSerial.h>
SoftwareSerial bt(2,3);
int carSpeed = 150;

void setup() {
  Serial.begin(9600);
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
  Serial.print("left: " + String(digitalRead(12)));
  Serial.println(", Right: " + String(digitalRead(11)));
  delay(500);
}
void forward(int sped) {
  analogWrite(5,sped);
  digitalWrite(6,LOW);
  digitalWrite(7,HIGH);
  digitalWrite(8,HIGH);
  digitalWrite(9,LOW);
  analogWrite(10,sped);
  }
void Backward(int sped){
  analogWrite(5,sped);
  digitalWrite(6,HIGH);
  digitalWrite(7,LOW);
  digitalWrite(8,LOW);
  digitalWrite(9,HIGH);
  analogWrite(10,sped);
  
  }
  void left(int sped){
    analogWrite(5,sped);
  digitalWrite(6,LOW);
  digitalWrite(7,HIGH);
  digitalWrite(8,LOW);
  digitalWrite(9,HIGH);
  analogWrite(10,sped);
    }
   void Right(int sped){
    analogWrite(5,sped);
  digitalWrite(6,HIGH);
  digitalWrite(7,LOW);
  digitalWrite(8,HIGH);
  digitalWrite(9,LOW);
  analogWrite(10,sped);
   }
   void stp(){
    analogWrite(5, 0);
  digitalWrite(6,HIGH);
  digitalWrite(7,LOW);
  digitalWrite(8,HIGH);
  digitalWrite(9,LOW);
  analogWrite(10, 0);
    }
    void forwardLeft(){
      
      
      }
   
