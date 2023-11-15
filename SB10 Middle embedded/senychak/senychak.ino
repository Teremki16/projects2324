#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>

int LIGHT = 0;
int PAGE = 0;
int TEMP = 0;
int HUMI = 0;
int SOIL = 0;
//Fixed by RoboCode
LiquidCrystal_I2C lcd_27(0x27, 16, 2);

DHT dht_pin_6 (6, DHT11);

DHT DHT_pin_6 (6, DHT11);
int a;

void beep();
void temp();
void sensors();
void light();
void humi();
void soil();
void water();

void setup()
{
  lcd_27.begin ();
  lcd_27.backlight();
  pinMode(4, OUTPUT);
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  dht_pin_6.begin();
  DHT_pin_6.begin();
  pinMode(9, INPUT);
  LIGHT = 0;
  PAGE = 0;
  TEMP = 0;
  HUMI = 0;
  SOIL = 0;
}

void loop()
{
  sensors();
  if (PAGE == 0)
  {
    light();
  }
  if (PAGE == 1)
  {
    temp();
  }
  if (PAGE == 2)
  {
    humi();
  }
  if (PAGE == 3)
  {
    soil();
  }
  PAGE = ( PAGE + 1 );
  if (PAGE > 3)
  {
    PAGE = 0;
  }
}

void soil()
{
  lcd_27.setCursor(1-1, 1-1);
  lcd_27.print( "soil:" );
  lcd_27.print( SOIL );
  if (SOIL > 500)
  {
    lcd_27.setCursor(1-1, 2-1);
    lcd_27.print( "soil ok" );
    digitalWrite(4, HIGH);
  }
  if (SOIL < 300)
  {
    lcd_27.setCursor(1-1, 2-1);
    lcd_27.print( "soil dry" );
    digitalWrite(4, LOW);
  }
}

void light()
{
  lcd_27.setCursor(1-1, 1-1);
  lcd_27.print( "Light level:" );
  lcd_27.print( LIGHT );
  if (LIGHT > 300)
  {
    lcd_27.setCursor(1-1, 2-1);
    lcd_27.print( "ON" );
  }
  else
  {
    lcd_27.setCursor(1-1, 2-1);
    lcd_27.print( "OFF" );
  }
}

void sensors()
{
  LIGHT = analogRead(0);
  if (LIGHT > 300)
  {
    digitalWrite(2, HIGH);
    digitalWrite(3, HIGH);
  }
  else
  {
    digitalWrite(2, LOW);
    digitalWrite(3, LOW);
  }
  TEMP = dht_pin_6.readTemperature();
  HUMI = DHT_pin_6.readHumidity();
  SOIL = analogRead(1);	
  delay(2000);
  lcd_27.clear();
  if (digitalRead(9))
  {
    beep();
    water();
  }
}

void beep()
{
  for (a=1; a<= ( 3 ); ++a )
  {
    analogWrite(5, 10);
    delay(50);
    analogWrite(5, 0);
    delay(50);
  }
}

void humi()
{
  lcd_27.setCursor(1-1, 1-1);
  lcd_27.print( "Humidity:" );
  lcd_27.print( HUMI );
  if (HUMI > 65)
  {
    lcd_27.setCursor(1-1, 2-1);
    lcd_27.print( "HIGH" );
  }
  else
  {
    lcd_27.setCursor(1-1, 2-1);
    lcd_27.print( "OK" );
  }
}

void water()
{
  digitalWrite(4, LOW);
  delay(1500);
  digitalWrite(4, HIGH);
}

void temp()
{
  lcd_27.setCursor(1-1, 1-1);
  lcd_27.print( "Temp:" );
  lcd_27.print( TEMP );
  if (TEMP > 28)
  {
    lcd_27.setCursor(1-1, 2-1);
    lcd_27.print( "HOT" );
  }
  else
  {
    lcd_27.setCursor(1-1, 2-1);
    lcd_27.print( "OK" );
  }
}
