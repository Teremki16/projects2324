int data[3];
int index = 0;
int pass[3] = {1, 3, 2};
void setup() {
  Serial.begin(9600);
  Serial.println("BOO");
}
void loop() {
  if (Serial.available() > 3) {
    data [index] = Serial.parseInt();
    index++;
    delay(100);
    Serial.print("*");
  }
  if (index == 3) {
    Serial.println();
    for (int i = 0; i < 3; i++) {
      Serial.print(data[i]);
      if(pass[i] != data[i]){
        Serial.print("Wrong Password!");
        break;
      }
    }
    index = 0;
  }
}
