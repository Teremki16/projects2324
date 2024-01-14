int data[3];
int index = 0;
int pass[3] = {1, 2, 3};

void setup() {
  Serial.begin(9600);
  Serial.println("hi");
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
      Serial.print(data[i]);
      if (pass[i] != data[i]) {
        Serial.print("!WRONG PASSWORD!");
        break;
      }
    }
    index = 0;
  }
}
