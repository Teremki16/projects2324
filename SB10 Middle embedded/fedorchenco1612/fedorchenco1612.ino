#include <FastLED.h>
#include <IRremote.hpp>

#define NUM_LEDS 30
CRGB leds[NUM_LEDS];
double speed = 0.0;
#define IR_RECEIVE_PIN 2
void getIrCommand(String &res)
{
  if (IrReceiver.decode()) {
    res = String(IrReceiver.decodedIRData.decodedRawData, HEX).substring(0,4);
    res.toUpperCase();
    IrReceiver.resume();
  }
  else{
    res = "";
  }
}

String ircode = "";

void setup()
{
  FastLED.addLeds<WS2812, 6, GRB>(leds, NUM_LEDS);
  pinMode(7, OUTPUT);
  IrReceiver.begin(IR_RECEIVE_PIN);
  Serial.begin(9600);

  speed = 0.1;

}

void loop()
{
  digitalWrite(7, LOW);
  getIrCommand(ircode);
  if (!( ircode.length() == 0 ))
  {
    ircode = ircode;
    Serial.print("Code:");
    Serial.print(ircode);
    Serial.println();
  }
}
