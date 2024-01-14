int data[3];
int index = 0;
int pass[3] = {3, 3, 5};

void setup() {
  Serial.begin(9600);
  Serial.println("Hello user!");
}
void loop() {
  if (Serial.available() > 3 ){
    data[index] = Serial.parseInt();
    index++;
    Serial.print("*");
  }
  if (index == 3) {
    Serial.println();
    for (int i = 0; i < 3; i++ ){
      Serial.print(data[i]);
      if (pass[i] != data[i]) {
        Serial.print("Wrong Pasword!");
        break;
      }


    }
    index = 0;
  }
}
