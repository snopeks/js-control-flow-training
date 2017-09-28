console.log("security_questions.js loaded");

var securityQuestions = [
  {
    question: "What was your first pet's name?",
    expectedAnswer: "FlutterNutter"
  },
  {
    question: "what is your favorite candybar?",
    expectedAnswer: "Snickers"
  },
  {
    question: "what was your dream career when you were 5 years old?",
    expectedAnswer: "astronaut dolphin"
  }
]


function securityCheck(){
  for(i = 0; i < securityQuestions.length; i++){
  var userAnswer = prompt(securityQuestions[i].question)
  if(userAnswer !== securityQuestions[i].expectedAnswer){
      alert("wrong answer, bye")
      break;
    }
  }
}
// securityQuestions.forEach(function(data){
//   var userAnswer = prompt(data.question)
//   if(userAnswer !== data.expectedAnswer){
//     alert("wrong answer, bye");
//     break; (this doesn't work!) <----------
//   } else {
//     alert("good!")
//   }
// })

// securityCheck()