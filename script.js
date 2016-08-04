var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61];

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

// Display how many tests ( the length of the scores array)
console.log("Bubbles test: " + scores.length);

//Display the highest score
console.log("Highest bubble score: " + highScore);
