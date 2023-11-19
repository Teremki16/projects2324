#include <SoftwareSerial.h>
SoftwareSerial bt(2,3);//RX = 2, TX = 3
int carSpeed = 150;
char value;

void setup() {
  bt.begin(9600);
}
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
getBluetoothMessage();
switch(value){
  case 'F';
  forward(carSpeed);
  break;

case 'B';
  bacward(carSpeed);
  break;

case 'L';
  left(carSpeed);
  break;

case 'R';
  right(carSpeed);
  break;

case 'S';
  stp();
  break;

case 'G';
  forwardLeft(carSpeed);
  break;

case 'I';
  forwardRigth(carSpeed);
  break;

case 'H';
  bacwardLeft(carSpeed);
  break;

case 'J';
  bacwardRight(carSpeed);
  break;




  
  }
}





}
void forward(int sped){
  analogWrite(5,sped);
  digitalWrite(6,LOW);
  digitalWrite(7,HIGH);
  digitalWrite(8,HIGH);
  digitalWrite(9,LOW);
  analogWrite(10,sped);
  
  }
void backward(int sped){
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
  void right(int sped){
  analogWrite(5,sped);
  digitalWrite(6,HIGH);
  digitalWrite(7,LOW);
  digitalWrite(8,HIGH);
  digitalWrite(9,LOW);
  analogWrite(10,sped);
  }
  void stp(){
   analogWrite(5,0);
  digitalWrite(6,LOW);
  digitalWrite(7,LOW);
  digitalWrite(8,LOW);
  digitalWrite(9,LOW);
  analogWrite(10,0);
    }
void forwardLeft(){
 analogWrite(5,sped);
  digitalWrite(6,LOW);
  digitalWrite(7,HIGH);
  digitalWrite(8,LOW);
  digitalWrite(9,LOW);
  analogWrite(10,sped);

  void forwardRight(){
 analogWrite(5,sped);
  digitalWrite(6,LOW);
  digitalWrite(7,LOW);
  digitalWrite(8,HIGH);
  digitalWrite(9,LOW);
  analogWrite(10,sped);

void backwardLeft(int sped){
 analogWrite(5,sped);
  digitalWrite(6,HIGH);
  digitalWrite(7,LOW);
  digitalWrite(8,LOW);
  digitalWrite(9,LOW);
  analogWrite(10,sped);

void backwardRight(int sped){
 analogWrite(5,sped);
  digitalWrite(6,LOW);
  digitalWrite(7,LOW);
  digitalWrite(8,LOW);
  digitalWrite(9,HIGH);
  analogWrite(10,sped);
}
void getBluetoothMessage(){
  if(bt.available()){
    value=bt.read();
    Serial.println("Message from phone:"+ (String)value);



    
    }
  }
  
  
  
  


  
 







  
