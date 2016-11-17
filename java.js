function randomX(){
  return  Math.floor((Math.random() * 800) + 1);

}
document.addEventListener("keydown", function(e){
  var catSpotX = Number(document.getElementById("cat").getAttribute("x"));
  var catSpotY = Number(document.getElementById("cat").getAttribute("y"));
  var ballX = Number(document.getElementById("ball").getAttribute("x"));
  var ballY = Number(document.getElementById("ball").getAttribute("y"));
  if(e.keyCode == 37 && catSpotX + 12 > 0){
       document.getElementById("cat").setAttribute("x", catSpotX - 12);
       if(catSpotX +40 > ballX && catSpotX +40 < ballX + 80 && catSpotY +40 > ballY && catSpotY +40 < ballY + 80){
         document.getElementById("ball").setAttribute("x", randomX());
       }
  }
  else if(e.keyCode == 39 && catSpotX + 12 < 1125){
        document.getElementById("cat").setAttribute("x", catSpotX + 12);
        if(catSpotX +40 > ballX && catSpotX +40 < ballX + 80 && catSpotY +40 > ballY && catSpotY +40 < ballY + 80){
          document.getElementById("ball").setAttribute("x", randomX());
        }
  }
  else if(e.keyCode == 38 && catSpotY + 12 > 0) {
      document.getElementById("cat").setAttribute("y", catSpotY - 12);
      if(catSpotX +40 > ballX && catSpotX +40 < ballX + 80 && catSpotY +40> ballY && catSpotY +40 < ballY + 80){
        document.getElementById("ball").setAttribute("x", randomX());
      }
  }
  else if (e.keyCode == 40 && catSpotY + 12 < 530) {
    document.getElementById("cat").setAttribute("y", catSpotY + 12);
    if(catSpotX +40 > ballX && catSpotX +40 < ballX + 80 && catSpotY +40 > ballY && catSpotY +40 < ballY + 80){
      document.getElementById("ball").setAttribute("x", randomX());
    }
  }
})
