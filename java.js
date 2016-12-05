var score=0;
var gameTime = 0;
var timeStart = Date.now()
var life = 150;

function randomX(){
  return  Math.floor((Math.random() * 1100) + 1);

}
document.addEventListener("keydown", function(e){
  var catSpotX = Number(document.getElementById("cat").getAttribute("x"));
  var catSpotY = Number(document.getElementById("cat").getAttribute("y"));
  var ballX = Number(document.getElementById("ball").getAttribute("x"));
  var ballY = Number(document.getElementById("ball").getAttribute("y"));
  var ballX2 = Number(document.getElementById("ball2").getAttribute("x"));
  var ballY2 = Number(document.getElementById("ball2").getAttribute("y"));
  var enemyX = Number(document.getElementById("enemy").getAttribute("x"));
  var enemyY = Number(document.getElementById("enemy").getAttribute("y"));
  if(e.keyCode == 37 && catSpotX + 12 > 0  && life > 0){
       document.getElementById("cat").setAttribute("x", catSpotX - 12);
      life = life - 1;
  }
  else if(e.keyCode == 39 && catSpotX + 12 < 1125 && life > 0){
        document.getElementById("cat").setAttribute("x", catSpotX + 12);
        life = life - 1;
  }
  else if(e.keyCode == 38 && catSpotY + 12 > 0  && life > 0) {
      document.getElementById("cat").setAttribute("y", catSpotY - 12);
      life = life - 1;
  }
  else if (e.keyCode == 40 && catSpotY + 12 < 530  && life > 0) {
    document.getElementById("cat").setAttribute("y", catSpotY + 12);
    life = life - 1;
  }

  if(gameTime < 1 && life > -2){
  document.getElementById("life").textContent = "Life: " + life;
  document.getElementById("score").textContent = "Score: " + score;
}
  if(score >= 10 && gameTime < 1){
    var timeStop= Date.now()
    gameTime = (timeStop - timeStart)/1000;
    document.getElementById("score").textContent = "You Won!! Score: " + score + " Your Time: " + gameTime + " Seconds";
    document.getElementById("score").setAttribute("x", 275);
    document.getElementById("screen").pauseAnimations();
  }
  else if(life <= 0 && gameTime < 1){
    var timeStop= Date.now()
    gameTime = (timeStop - timeStart)/1000;
    document.getElementById("score").textContent = "You lost Pal better luck next time!! Score: " + score + " Your Time: " + gameTime + " Seconds";
    document.getElementById("score").setAttribute("x", 100);
    document.getElementById("screen").pauseAnimations();
  }

});

function collisionCheck(){
  var catSpotX = Number(document.getElementById("cat").getAttribute("x"));
  var catSpotY = Number(document.getElementById("cat").getAttribute("y"));
  var ballX = Number(document.getElementById("ball").getAttribute("x"));
  var ballY = Number(document.getElementById("ball").getAttribute("y"));
  var ballX2 = Number(document.getElementById("ball2").getAttribute("x"));
  var ballY2 = Number(document.getElementById("ball2").getAttribute("y"));
  var enemyX = Number(document.getElementById("enemy").getAttribute("x"));
  var enemyY = Number(document.getElementById("enemy").getAttribute("y"));
  var enemy2X = Number(document.getElementById("enemy2").getAttribute("x"));
  var enemy2Y = Number(document.getElementById("enemy2").getAttribute("y"));
  if(catSpotX +40 > ballX && catSpotX +40 < ballX + 80 && catSpotY +40 > ballY && catSpotY +40 < ballY + 80){
    document.getElementById("ball").setAttribute("x", randomX());
    score++;
    life = life + 70;
  }
  else if (catSpotX +40 > ballX2 && catSpotX +40 < ballX2 + 80 && catSpotY +40 > ballY2 && catSpotY +40 < ballY2 + 80){
    document.getElementById("ball2").setAttribute("x", randomX());
    score++;
    life = life + 70;
  }
  else if(catSpotX +40 > enemyX && catSpotX +40 < enemyX + 80 && catSpotY +40 > enemyY && catSpotY +40 < enemyY + 80) {
    life = life - 90;
  }
  else if (catSpotX +40 > enemy2X && catSpotX +40 < enemy2X + 80 && catSpotY +40 > enemy2Y && catSpotY +40 < enemy2Y + 80) {
      life = life - 90;
  }
  requestAnimationFrame(collisionCheck);
  }
collisionCheck();

function followEnemy(){
  var enemy2X = Number(document.getElementById("enemy2").getAttribute("x"));
  var enemy2Y = Number(document.getElementById("enemy2").getAttribute("y"));
  var catSpotX = Number(document.getElementById("cat").getAttribute("x"));
  var catSpotY = Number(document.getElementById("cat").getAttribute("y"));
  if(Math.abs(enemy2X - catSpotX) > Math.abs(enemy2Y - catSpotY)){
    if(enemy2X - catSpotX > 0){
      document.getElementById("enemy2").setAttribute("x", enemy2X -3);
    }
    else {
      document.getElementById("enemy2").setAttribute("x", enemy2X + 3);
    }
  }
  else if(Math.abs(enemy2X - catSpotX) < Math.abs(enemy2Y - catSpotY))
  {
    if(enemy2Y - catSpotY > 0)
    {
      document.getElementById("enemy2").setAttribute("y", enemy2Y -3);
    }
    else
    {
      document.getElementById("enemy2").setAttribute("y", enemy2Y + 3);
    }
  }
  requestAnimationFrame(followEnemy);
}
followEnemy();
