
int x = 2, y = -1;
int rot = 0;
int fallSpeed = 100;
int acc = 1;
int scores = 0;
int level = 0;



void drawBlock(byte arr [4][4], int x, int y) {
  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
      if (arr[j][i] == 1) {
        gb.drawPoint(x + i, y + j);
      }
    }
  }
}

void makeMovetetris() {
  if (gb.getKey() == 4  && !gb.checkBlockCollision(gb.block[rot], x - 1, y)) {
    x--;
  }
  if (gb.getKey() == 5 && !gb.checkBlockCollision(gb.block[rot], x + 1, y)) {
    x++;
  }
  if (gb.getKey() == 2 && !gb.checkBlockCollision(gb.block[rot + 1], x, y)) {
    rot++;
    if (rot > 3) rot = 0;
  }
  if (gb.getKey() == 6) {
    acc = 4;
  } else {
    acc = 1;
  }
}

void CreateBlock(int num) {
  x = 2, y = -1, rot = random(0, 4);
  if (num == 0) gb.generateBlock(gb.block, I_Block_1, I_Block_2, I_Block_3, I_Block_4);
  if (num == 1) gb.generateBlock(gb.block, Z_Block_1, Z_Block_2, Z_Block_3, Z_Block_4);
  if (num == 2) gb.generateBlock(gb.block, S_Block_1, S_Block_2, S_Block_3, S_Block_4);
  if (num == 3) gb.generateBlock(gb.block, L_Block_1, L_Block_2, L_Block_3, L_Block_4);
  if (num == 4) gb.generateBlock(gb.block, J_Block_1, J_Block_2, J_Block_3, J_Block_4);
  if (num == 5) gb.generateBlock(gb.block, T_Block_1, T_Block_2, T_Block_3, T_Block_4);
  if (num == 6) gb.generateBlock(gb.block, O_Block_1, O_Block_2, O_Block_3, O_Block_4);

}

bool win() {
  if (scores >= 20) {
    return true;
  }
  return false;
}

void clearMemory() {
  for (int i = 0; i < 16; i++) {
    for (int j = 0; j < 8; j++) {
      gb.wipePoint(j, i);

    }
  }
}
bool loss() {
  if (gb.checkBlockCollision(gb.block[rot], x, 0)) {
    return true;
  }
  return false;
}

void tetrisGame() {
  if (loss()) {
    Serial.println("you are lost the game");
    Serial.println("Score: " + (String)scores);
    drawScore(gb, scores);
    delay(2000);
    clearMemory();
    scores = 0;
    gb.sound(COLLISION);
    gb.testMatrix(10);
  }
  if (win()) {
    clearMemory();
    scores = 0;
    level = 0;
    for (int i = 0; i < 8; i++) {
      for (int j = 0; j < 16; j++){
      gb.setLed(i, j, WIN[j][i]);
    }
  }
  delay(2000);
  gb.clearDisplay();
}

makeMovetetris();
if (gb.checkBlockCollision(gb.block[rot], x , y + 1)) {
  gb.memBlock(gb.block[rot], x, y);
  CreateBlock(random(7));

  int lines = gb.fullLine();
  if (lines != 0) {
    scores += lines;
    level += lines;
    gb.sound(SCORE);
    if (level >= 5) {
      acc++;
      level = 0;
    }
  }
} else {
  y++;
}
gb.drawDisplay();
drawBlock(gb.block[rot], x, y);
delay(fallSpeed / acc);

}
