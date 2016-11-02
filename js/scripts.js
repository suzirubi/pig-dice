// business logic
// var rollDice = function() {
//   var playerOneValue = Math.floor((Math.random()*6)+1);
//   return playerOneValue;
// }
//
// var playerOneScore = []
// var Scores = [0];

function Score (Score.rollDice) {
  this.roll = roll;
}

Score.prototype.rollDice = function(roll) {
  return this.roll = Math.floor((Math.random()*6)+1);
}


var playerOneScore = [this.role];
console.log(playerOneScore);
var Scores = [0];



// user logic
$(document).ready(function(){


  $("form#turn").submit(function(event){
    event.preventDefault();

    // var initialRoll = 0;
    // var initialResult = new Score (initialRoll);

    var userRoll = $(".player1Roll").val(0);
    var newRoll = new Score (roll);
    var rollResult = Score.rollDice(userRoll);


    $("#rollOne").text(rollResult);

  });

});
