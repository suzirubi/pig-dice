// business logic
function Player1() {
  this.totalScore = 0;
  this.runningScore = 0;
}


Player1.prototype.rollDice = function() {

  var diceRoll = Math.floor((Math.random()*6)+1);

  if (diceRoll === 1) {
    this.runningScore = 0;
  } else if (diceRoll !== 1) {
    this.runningScore += diceRoll;
  } else if (runningScore >= 100) {
    alert("game over");
  }
}

// user logic
$(document).ready(function(){

  $("form#turn").submit(function(event){
    event.preventDefault();

    // var userInput = $("button#playerRoll").val();
    // var userInputHold = $("button#playerHold").val();
    var player1Turn = new Player1();




    $("#rollOne").text(diceRoll); // diceRoll currently out of scope, need to find a way to make it global

    $("#turnTotal").text(player1Turn.rollDice()); //

  });


  //callback for holding

});
