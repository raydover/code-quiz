
// get high scores data, and logic to create it put on html
var scores = JSON.parse(localStorage.getItem("highScores")) || [];

var highScoresEl = document.getElementById("highScores");

for (var i = 0; i < scores.length; i ++){
    var newP = document.createElement('p');
    newP.textContent = "name: " + scores[i].initials + "score: " + scores[i].score ;
     highScoresEl.append(newP); 
}