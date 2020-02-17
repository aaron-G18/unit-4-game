//////// GLOBAL VARIABLES //////////

var wins = 0;
var winsHTML = $("#wins");
var losses = 0;
var lossesHTML = $("#losses");
var randNumber;
var randNumberHTML = $("#randNumber");
var userScore = 0;
var userScoreHTML = $("#userScore");
var gem1Points;
var gem2Points;
var gem3Points;
var gem4Points;
var gemPoints = [];
var messageHTML = $(".message");
var winMessage =
  "<p class='winMessage'>You won! Good work! Try to match this new number!</p>";
var loseMessage =
  "<p class='winMessage'>Oh no, you lost. Try again with this number!</p>";

//////////////  FUNCTIONS  ///////////////
//Function to set randNumber as a random number in the range of 19-120 and update the displayed number to match.

function randomNumber() {
  randNumber = 19 + Math.floor(Math.random() * 102);
  console.log("random number is: " + randNumber);
  displayRandNumber();
}

// Function to update random number displayed (number for player to try to match).

function displayRandNumber() {
  randNumberHTML.html(randNumber);
}

// Function to update wins display on html.

function updateWins() {
  winsHTML.html(wins);
}

// Function to update losses display on html.

function updateLosses() {
  lossesHTML.html(losses);
}

// Function to update the user's score.

function updateUserScore() {
  userScoreHTML.html(userScore);
}

// Functions to update the end game message (win or lose).

function displayWin() {
  messageHTML.html(winMessage);
}

function displayLose() {
  messageHTML.html(loseMessage);
}

// Function to assign random point values between 1-12 to the four different gems.

function gemPointsSet() {
  for (i = 0; i < 4; i++) {
    gemPoints[i] = 1 + Math.floor(Math.random() * 13);
    console.log("gemPoints array: " + gemPoints);
  }
  gem1Points = gemPoints[0];
  gem2Points = gemPoints[1];
  gem3Points = gemPoints[2];
  gem4Points = gemPoints[3];
  console.log("gem 1 points: " + gem1Points);
  console.log("gem 2 points: " + gem2Points);
  console.log("gem 3 points: " + gem3Points);
  console.log("gem 4 points: " + gem4Points);
  // Could this be done with a loop? D.R.Y. .... hmmm.
}

// Function to start game.

function initializePlay() {
  userScore = 0;
  updateUserScore();
  randomNumber();
  gemPointsSet();
}

// Make page ready to play on load.
initializePlay();

// Make sure DOM is ready before playing.
$(document).ready(function() {
  ///////////  EVENT HANDLERS  ////////////////
  // Gem 1 "on click"
  $(".gem1").on("click", function() {
    messageHTML.html("");
    userScore = userScore + gem1Points;
    console.log("new user score is: " + userScore);
    updateUserScore();
    if (userScore === randNumber) {
      alert("you won");
      wins++;
      updateWins();
      displayWin();
      initializePlay();
    } else if (userScore > randNumber) {
      alert("game over");
      losses++;
      updateLosses();
      displayLose();
      initializePlay();
    }
  });

  // Gem 2 "on click"
  $(".gem2").on("click", function() {
    messageHTML.html("");
    userScore = userScore + gem2Points;
    console.log("new user score is: " + userScore);
    updateUserScore();
    if (userScore === randNumber) {
      alert("you won");
      wins++;
      updateWins();
      displayWin();
      initializePlay();
    } else if (userScore > randNumber) {
      alert("game over");
      losses++;
      updateLosses();
      displayLose();
      initializePlay();
    }
  });

  // Gem 3 "on click"
  $(".gem3").on("click", function() {
    messageHTML.html("");
    userScore = userScore + gem3Points;
    console.log("new user score is: " + userScore);
    updateUserScore();
    if (userScore === randNumber) {
      alert("you won");
      wins++;
      updateWins();
      displayWin();
      initializePlay();
    } else if (userScore > randNumber) {
      alert("game over");
      losses++;
      updateLosses();
      displayLose();
      initializePlay();
    }
  });

  // Gem 4 "on click"
  $(".gem4").on("click", function() {
    messageHTML.html("");
    userScore = userScore + gem4Points;
    console.log("new user score is: " + userScore);
    updateUserScore();
    if (userScore === randNumber) {
      alert("you won");
      wins++;
      updateWins();
      displayWin();
      initializePlay();
    } else if (userScore > randNumber) {
      alert("game over");
      losses++;
      updateLosses();
      displayLose();
      initializePlay();
    }
  });
});
