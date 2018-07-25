var button = document.getElementById("trash");
var aboutMe = document.getElementById("trivia");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
//console.log(button);
//console.log(aboutMe);

function showHidetrivia(){
  if (trivia.style.display === "block"){
    trivia.style.display = "none";
  } else {
    trivia.style.display = "block";
  }
}
function showCorrect(){
    correct.style.display = "block";
    incorrect.style.display = "none"
  }
function showIncorrect(){
    incorrect.style.display = "block";
    correct.style.display = "none";
  }


button.onclick = showHidetrivia;
b.onclick = showCorrect;
a.onclick= showIncorrect;
c.onclick= showIncorrect;
d.onclick= showIncorrect;
