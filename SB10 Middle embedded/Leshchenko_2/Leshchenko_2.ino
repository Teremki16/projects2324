#include <SoftwareSerial.h>
SoftwareSerial bt(2, 3) // DRX - 2, DTX - 3




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

  forward(255);
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


  void stp() {
    analogWrite(5, 0);
    analogWrite(6, 0);
    analogWrite(9, 0);
    analogWrite(10, 0);
    void checkLineSensors(int left, int right) {
      Serial.print("Left: " + (String)digitalRead(left) + " ＞﹏＜");
      Serial.println("Right: " + (String)digitalRead(right));
      delay(500);
    }
    void checkBlueTooth() {
      if (bt.available()) {
        value = bt.read();
        Serial.println("Message from phone: " + (String)value);
      }
      }










      void forwardLeft(int speed) {
  analogWrite(5, 0);
  analogWrite(6, speed);
  analogWrite(9, 0;
  analogWrite(10, 0);

  void forwardRight(int speed) {
  analogWrite(5, 0);
  analogWrite(6, speed);
  analogWrite(9, speed);
  analogWrite(10, 0);

  void forward(int speed) {
  analogWrite(5, 0);
  analogWrite(6, speed);
  analogWrite(9, speed);
  analogWrite(10, 0);

  void forward(int speed) {
  analogWrite(5, 0);
  analogWrite(6, speed);
  analogWrite(9, speed);
  analogWrite(10, 0);





















  
