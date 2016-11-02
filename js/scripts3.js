var rollDice = function() {
  var userRoll = Math.floor((Math.random()*6)+1);
  return userRoll;
}

  var scores = 0;

  function Score (finalScore) {
    this.roll = finalScore
  }

  var player1 = [];
  var player2 = [];
  player1.roll = .addScore();
  player2.roll = .addScore();

  Score.prototype.addScore = function {
    if (rollDice !== 1) {
      var runScore = (scores += rollDice)
      return runScore;
    }else {  //create seperate prototype?
      (rollDice === 1) {
      var reset = 0;
      return reset;
      //pass to player 2
      }
    }
  }
