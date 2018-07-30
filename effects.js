var button = document.getElementById("trash");
var button2 = document.getElementById("trash2");
var button3 = document.getElementById("trash3");
var button4 = document.getElementById("trash4");
var button5 = document.getElementById("trash5");
var button6 = document.getElementById("trash6");
var button7 = document.getElementById("trash7");
var button8 = document.getElementById("trash8");
var button9 = document.getElementById("trash9");
var button10 = document.getElementById("trash10");
var buttons = [button, button2, button3, button4, button5, button6, button7, button8, button9,button10];
//console.log(buttons[0])

var trivia = document.getElementById("trivia");
var trivia2 = document.getElementById("trivia2");
var trivia3 = document.getElementById("trivia3");
var trivia4 = document.getElementById("trivia4");
var trivia5 = document.getElementById("trivia5");
var trivia6 = document.getElementById("trivia6");
var trivia7 = document.getElementById("trivia7");
var trivia8 = document.getElementById("trivia8");
var trivia9 = document.getElementById("trivia9");
var trivia10 = document.getElementById("trivia10");
var triviaQuestions = [trivia, trivia2, trivia3, trivia4, trivia5, trivia6, trivia7, trivia8, trivia9, trivia10];

var a = document.getElementById("A");
var b = document.getElementById("B");
var c = document.getElementById("C");
var d = document.getElementById("D");
var choices = [a, b, c, d];

var correct = document.getElementById("correct");
var correct2 = document.getElementById("correct2");
var correct3 = document.getElementById("correct3");
var correct4 = document.getElementById("correct4");
var correct5 = document.getElementById("correct5");
var correct6 = document.getElementById("correct6");
var correct7 = document.getElementById("correct7");
var correct8 = document.getElementById("correct8");
var correct9 = document.getElementById("correct9");
var correc10 = document.getElementById("correct10");
var correctStatements = [correct, correct2,correct3,correct4,correct5,correct6,correct7, correct8, correct9, correct10];

var incorrect = document.getElementById("incorrect");
var incorrect2 = document.getElementById("incorrect2");
var incorrect3 = document.getElementById("incorrect3");
var incorrect4 = document.getElementById("incorrect4");
var incorrect5 = document.getElementById("incorrect5");
var incorrect6 = document.getElementById("incorrect6");
var incorrect7 = document.getElementById("incorrect7");
var incorrect8 = document.getElementById("incorrect8");
var incorrect9 = document.getElementById("incorrect9");
var incorrect10 = document.getElementById("incorrect10");
var incorrectStatements = [incorrect, incorrect2,incorrect3,incorrect4,incorrect5,incorrect6,incorrect7,incorrect8, incorrect9,incorrect10];

var pickUp = document.getElementById("pickUp");
var pickUp2 = document.getElementById("pickUp2");
var pickUp3 = document.getElementById("pickUp3");
var pickUp4 = document.getElementById("pickUp4");
var pickUp5 = document.getElementById("pickUp5");
var pickUp6 = document.getElementById("pickUp6");
var pickUp7 = document.getElementById("pickUp7");
var pickUp8 = document.getElementById("pickUp8");
var pickUp9 = document.getElementById("pickUp9");
var pickUp10 = document.getElementById("pickUp10");
var pickUpButtons = [pickUp, pickUp2,pickUp3,pickUp4,pickUp5,pickUp6,pickUp7,pickUp8,pickUp9,pickUp10];

var tr = document.getElementById("true");
var fa = document.getElementById("false");


  function showHidetrivia(){
    for (i = 0; i < triviaQuestions.length; i++){
      console.log(triviaQuestions[i])
      if (triviaQuestions[i].style.display === "block"){
        triviaQuestions[i].style.display = "none";
      } else {
        triviaQuestions[i].style.display = "block";
      }
    }
  }

  function showCorrect(){
    for (i = 0; i < triviaQuestions.length; i++){
      incorrectStatements[i].style.display = "none";
      correctStatements[i].style.display = "block";
      pickUpButtons[i].style.display = "block";
    }
  }

  function pickUpTrash(){
    for (i = 0; i < triviaQuestions.length; i++){
      buttons[i].style.display = "none";
      if (triviaQuestions[i].style.display === "block"){
        triviaQuestions[i].style.display = "none";
      }
    }
  }

  function showIncorrect(){
    for (i = 0; i < triviaQuestions.length; i++){
      incorrectStatements[i].style.display = "block";
    }
  }


 var i = 0;
 while (i < 10){
  buttons[i].onclick = showHidetrivia;

  b.onclick = showIncorrect;
  c.onclick = showIncorrect;
  d.onclick = showIncorrect;
  a.onclick = showCorrect;

  console.log(i)
  console.log(pickUpButtons[i])
  pickUpButtons[i].onclick = pickUpTrash;
  i++;
  tr.onclick = showCorrect;
  fa.onclick = showIncorrect;
}
