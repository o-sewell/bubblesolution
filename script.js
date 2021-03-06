var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61];

var costs = [.25, .27, .25, .25, .25, .25,
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .25, .25, .28, .25, .24, .22];

function printAndGetHighScore(scores) {
  var highScore = 0;
  var output;
  //itterate through the scores array and display the index number and scores value
  for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution # " + i + " score: " + scores[i];
    console.log(output);
    //Check each time through the loop to see if score is more then highScore
    if (scores[i] > highScore) {
      // if the score is higher it then becomes our new highScore
        highScore = scores[i];
    }
  }
  // return the value of the highScore
  return highScore;
}

//Display the Solutions with the highest scores
function getBestResults(scores, highScore) {
  //variable containing a empty array
  var bestSolutions = [];
  //itterate through the scores
  for (var i = 0; i < scores.length; i++) {
    // if the scores value is equal to the highscore
    if (scores[i] == highScore) {
      //push the scores index number to the bestSolutions array
      bestSolutions.push(i);
    }
  }
  // return the value of the best solutions array
  return bestSolutions
}


// Get most cost effective solution
function getMostCostEffectiveSolution(scores, costs, highScore) {
  var cost = 100;
  var index;
  for (var i = 0; i < scores.length; i++ ) {
    // if the value of scores is equal to the highScore
    if ( scores[i] == highScore) {
      //if current value of cost is greater than the costs value in array
      if (cost > costs[i]) {
        index = i;
        cost = costs [i];
      }
  }
}
  return index;
}

var highScore = printAndGetHighScore(scores);

// Display how many tests ( the length of the scores array)
console.log("Bubbles test: " + scores.length);
//Display the highest score
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
// Display the solutions with the highest score
console.log("Solutions with the highest score:" + bestSolutions);

// Display most cost effective solution
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble solution #" + mostCostEffective + " is the most cost effective");
