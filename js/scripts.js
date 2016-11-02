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

    // var userInput = $("button#playerRoll").val(0);
    // var userInputHold = $("button#playerHold").val(1);

    var userClick = rollDice();

    var resetTotal = function() {
      if (userClick === 1) {
        var reset = 0;
        return reset;
      } else {
      // if (userClick === <=6)
        var runningScore = (scores += userClick);
        return runningScore;
      }
    }

    $("#rollOne").text(userClick);

    $("#turnTotal").text(resetTotal);

  });

});
