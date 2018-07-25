var button = document.getElementById("trash");
var button2 = document.getElementById("trash2");
var trivia = document.getElementById("trivia");
var a = document.getElementById("A");
var b = document.getElementById("B");
var c = document.getElementById("C");
var d = document.getElementById("D");
var correct = document.getElementById("correct");
var correct2 = document.getElementById("correct2");
var incorrect = document.getElementById("incorrect");
var incorrect2 = document.getElementById("incorrect2");
var pickUp = document.getElementById("pickUp");
var pickUp2 = document.getElementById("pickUp2");
var tr = document.getElementById("true");
var fa = document.getElementById("false");

function showHidetrivia(){
  if (trivia.style.display === "block"){
    trivia.style.display = "none";
  } else {
    trivia.style.display = "block";
  }
}

function showHidetrivia2(){
  if (trivia2.style.display === "block"){
    trivia2.style.display = "none";
  } else {
    trivia2.style.display = "block";
  }
}

function showCorrect(){
  incorrect.style.display = "none";
  correct.style.display = "block";
  pickUp.style.display = "block";
}

function showCorrect2(){
  incorrect2.style.display = "none";
  correct2.style.display = "block";
  pickUp2.style.display = "block";
}

function pickUpTrash(){
  button.style.display = "none";
  if (trivia.style.display === "block"){
    trivia.style.display = "none";
  }
}

function pickUpTrash2(){
  button2.style.display = "none";
  if (trivia2.style.display === "block"){
    trivia2.style.display = "none";
  }
}

function showIncorrect(){
  incorrect.style.display = "block";
}

function showIncorrect2(){
  incorrect2.style.display = "block";
}

button.onclick = showHidetrivia;
button2.onclick = showHidetrivia2;
b.onclick = showIncorrect;
c.onclick = showIncorrect;
d.onclick = showIncorrect;
a.onclick = showCorrect;
pickUp.onclick = pickUpTrash;
pickUp2.onclick = pickUpTrash2;
tr.onclick = showCorrect2;
fa.onclick = showIncorrect2;
