int data[3];
int index = 0;
int Pass[3] = {1, 2, 3};
void setup() {
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 3) {
    data[index] = Serial.parseInt();
    index++;
    Serial.print("*");
  }
  if (index == 3) {
    Serial.println();
    for (int i = 0; i < 3; i++) {
      if (Pass[i] != data[i]) {
        Serial.println("Wrong password, Watson...");
        break;
        
      }
    }
    index = 0;
  }
}
