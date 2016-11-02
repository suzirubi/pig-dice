// business logic


var rollDice = function() {
  var userRoll = Math.floor((Math.random()*6)+1);
  return userRoll;
}

var scores = 0;



// user logic
$(document).ready(function(){

  $("form#turn").submit(function(event){
    event.preventDefault();

    // var userInput = $(".player1Roll").val(0);
    // var userInputHold = $(".player1Roll").val(1);

    var userRollTurn = rollDice();

    var resetTotal = function() {
      if (userRollTurn === 1) {
        var reset = 0;
        return reset;
      } else {
        var runningScore = (scores += userRollTurn);
        return runningScore;
      }
    }


    $("#rollOne").text(userRollTurn);

    $("#turnTotal").text(resetTotal);

  });

});
