void setup() {
  pinMode(5, OUTPUT);
  pinMode(6,OUTPUT);
  pinMode(9,OUTPUT);
  pinMode(10,OUTPUT);
}

void loop() {
forward(255);

}
void forward(int speed){
  analogWrite(5,0);
  analogWrite(6,speed);
  analogWrite(9,speed);
  analogWrite(10,0);
}
