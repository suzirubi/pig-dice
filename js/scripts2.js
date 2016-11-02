// business logic
function Player1 (score) {
  this.score = score;
}


//to test

this.score = 2;

Player1.prototype.playerTurn = function() {

  var x = this.score;

  var rollDice = function() {
    var x = Math.floor((Math.random()*6)+1);
    return x;
  }

  var newScore = 0;

  var runningScore = 0;

  var resetTotal = function() {
    if (x === 1) {
      var reset = 0;
      return reset;
    } else if (x === <= 6) {
      var runningScore = (newScore += x);
      return runningScore;
    } else (runningScore === <= 100) {
      var hidePlayer1;
      return hidePlayer1;
    }
  }
}



// user logic
$(document).ready(function(){

  $("form#turn").submit(function(event){
    event.preventDefault();


    $("#rollOne").text(userClick);

    $("#turnTotal").text(resetTotal);

  });

});
