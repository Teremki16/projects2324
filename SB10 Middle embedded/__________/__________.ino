void setup() {
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(12, OUTPUT);
  Serial.begin(9600);


}

void loop() {
checkLineSensors(11, 12);  
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

void Stop() {
  analogWrite(5, 0);
  analogWrite(6, 0);
  analogWrite(9, 0);
  analogWrite(10, 0);
}

void checkLineSensors(int left, int rght){
Serial.print("Left: " + (String)digitalRead(left)+"");
Serial.println("Right: " + (String)digitalRead(right));
delay(500);
}
