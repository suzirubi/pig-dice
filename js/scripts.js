// business logic
function Score(totalScore) {
  this.score = totalScore;
}

Score.prototype.addScore = function (thisRoll) {
  return this.score += thisRoll;
}


var rollDice = function(userRoll) {
  var userRoll = Math.floor((Math.random()*6)+1);
  return userRoll;
}

var Scores = [];
// user logic
$(document).ready(function(){


  $("form#turn").submit(function(event){
    event.preventDefault();


    var userRoll = $(".player1Roll").val(0);
    var userHold = $(".player1Roll").val(1);

    var rollTurn = rollDice(userRoll);

    var newTurnScore = new Score(rollTurn);
    Scores.push(newTurnScore);

    var runningScore = Scores[0].addScore(newTurnScore);


    $("#rollOne").text(rollTurn);
    $("#turnTotal").text(runningScore);

  });

});
