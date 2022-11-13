
//Questions for quiz

//question one
var questionOne = "What does JS stand for?";
var qOneAnswerOne = "JavaScript";
var qOneAnswerTwo = "Jump Start";
var qOneAnswerThree = "Jerry Seinfield";
var qOneAnswerFour = "Just Sing";

//question two
var questionTwo = "What does API stand for?";
var qTwoAnswerOne = "American Pony Index";
var qTwoAnswerTwo = "Application Programming Interface";
var qTwoAnswerThree = "Are Pigeons Intelligent";
var qTwoAnswerFour = "Always Point Inward";

//question three
var questionThree = "Which is an example of camel case?";
var qThreeAnswerOne = "Camels are cute";
var qThreeAnswerTwo = "camels-are-cute";
var qThreeAnswerThree = "camelsAreCute";
var qThreeAnswerFour = "CAMELSareCUTE";

//question four
var questionFour = "Who created JavaScript?";
var qFourAnswerOne = "CC Tinsley";
var qFourAnswerTwo = "Hank Anderson";
var qFourAnswerThree = "Leigh Avidan";
var qFourAnswerFour = "Brendan Eich";

//question five
var questionFive = "Which is not a primitive value?";
var qFiveAnswerOne = "Number";
var qFiveAnswerTwo = "Symbol";
var qFiveAnswerThree = "Hunting and gathering";
var qFiveAnswerFour = "String";


//queries
/*var start = document.getElementById(quizTime);
var question = document.getElementById(questionSpot);
var answerOne = document.getElementsByClassName(ansOne);
var answerTwo = document.getElementsByClassName(ansTwo);
var answerThree = document.getElementsByClassName(ansThree);
var answerFour = document.getElementsByClassName(ansFour); */
var beginEl = document.querySelector("#mainSpace");
var questionCount = 0;
var questionEl = document.querySelector("#questionSpot");
var answerOne = document.querySelector("#firstAnswer");
var answerTwo = document.querySelector("#secondAnswer");
var answerThree = document.querySelector("#thirdAnswer");
var answerFour = document.querySelector("#fourthAnswer");




//Creating questions

/*
var quizQuestions = [
    {
        question : "what does JS stand for?",
        answerOne : "JavaScript",
        answerTwo : "Jump Start",
        answerThree : "Jerry Seinfield",
        answerFour : "Just Sing"
        correctAnswer : answerOne
        
    }, {
        question : "What does API stand for?",
        answerOne : "American Pony Index",
        answerTwo : "Application Programming Interface",
        answerThree : "Are Pigeons Intelligent",
        answerFour : "Always Point Inward"
        correctAnswer : answerTwo
    }, {
        question : "Which is an example of camel case?",
        answerOne : "Camels Are Cute",
        answerTwo : "camels-are-cute",
        answerThree : "camelsAreCute",
        answerFour : "CAMELSareCUTE"
        correctAnswer : []
    }, {
        question : "Who created JavaScript?",
        answerOne : "CC Tinsley",
        answerTwo : "Hank Anderson",
        answerThree : "Leigh Avidan",
        answerFour : "Brendan Eich"
    }, {
        question : "Which is not a primitive value?",
        answerOne : "Number",
        answerTwo : "Hunting and gathering",
        answerThree : "String",
        answerFour : "Symbol"
    }
] */
/*var lastQuestion = quizQuestions.length -1;
var runningQuestion = 0;

//Rendering a question

function renderQuestion() {
    var q = quizQuestions[runningQuestion];
    question.textContent = "<p>" + q.question + "</p>";
    answerOne.textContent = q.answerOne;
    answerTwo.textContent = q.answerTwo;
    answerThree.textContent = q.answerThree; 
    answerFour.textContent = q.answerFour;

    renderQuestion();
}


startbtn.addEventListener("click", renderQuestion);*/

var questions = [
    {
        question : "What does JS stand for?",
        answers : ["JavaScript", "Jump Start", "Jerry Seinfield", "Just Sing"],
        correctAns : "0"
    },

    {
        question : "What does API stand for?",
        answers : ["American Pony Index", "Application Programming Interface", "Are Pigeons Intelligent", "Always Point Inward"],
        correctAns : "1"

    },

    {
        question : "Which is an example of camel case?",
        answers : ["Camels Are Cute", "camels-are-cute", "camelsAreCute", "CAMELSareCUTE"],
        correctAns : "2"

    },
    {
        question : "Who created JavaScript?",
        answers : ["CC Tinsley", "Hank Anderson", "Leigh Avidan", "Brendan Eich"],
        correctAns : "3"

    },
    {
        question : "Which is not a primitive value",
        answers : ["Number", "Hunting and gathering", "String", "Symbol"],
        correctAns : "1"
    }

]

function startQuiz() {
   // beginEl.style.display = "block";
    questionCount = 0;

    setQuestion(questionCount);


}

function setQuestion(id) {
    if (id < questions.length) {
    questionEl.textContent = questions[id].question;
    answerOne.textContent = questions[id].answers[0];
    answerTwo.textContent = questions[id].anwsers[1];
    answerThree.textContent = questions[id].answers[2];
    answerFour.textContent = questions[id].anwsers[3];

    }

}

startbtn.addEventListner("click", startQuiz);
