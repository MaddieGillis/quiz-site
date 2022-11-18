//variables
var timeEl = document.querySelector(".timerSection");
var secondsLeft = 100;
var scoreEl = document.querySelector("#score");
var welcomeEl = document.querySelector("#welcome");
var allQuestionsEl = document.querySelector("#allQuestions");
var questionEl = document.querySelector("#question");
var questionCount = 0;
var finalEl = document.querySelector("#final");
var initialsInput = document.querySelector("#initialsInput");
var highscoresEl = document.querySelector("#highscores");
var scoreListEl = document.querySelector("#score-list");
var scoreList = JSON.parse(localStorage.getItem("scoreList")) || []; 
var startBtn = document.querySelector("#startBtn");
//var answerBtn = document.querySelectorAll("#button.ansBtn");
var answerOne = document.querySelector("#answerOne");
var answerTwo = document.querySelector("#answerTwo");
var answerThree = document.querySelector("#answerThree");
var answerFour = document.querySelector("#answerFour");
var submitBtn = document.querySelector("#submit-score");



//array for the test questions
var questions = [
    {
        question : "What does JS stand for?",
        answers : ["JavaScript", "Jump Start", "Jerry Seinfield", "Just Sing"],
        correctAnswer : "0"
    },
    
    {
        question : "What does API stand for?",
        answers : ["American Pony Index", "Application Programming Interface", "Are Pigeons Intelligent", "Always Point Inward"],
        correctAnswer : "1"
        
    },
    
    {
        question : "Which is an example of camel case?",
        answers : ["Camels Are Cute", "camels-are-cute", "camelsAreCute", "CAMELSareCUTE"],
        correctAnswer : "2"
        
    },
    {
        question : "Who created JavaScript?",
        answers : ["CC Tinsley", "Hank Anderson", "Leigh Avidan", "Brendan Eich"],
        correctAnswer : "3"
        
    },
    {
        question : "Which is not a primitive value",
        answers : ["Number", "Hunting and gathering", "String", "Symbol"],
        correctAnswer : "1"
    }
    
]

//timer
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "s";
        
        if (secondsLeft <= 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            allQuestionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000)
}

//fucntion to start the quiz
function startQuiz() {
   welcomeEl.style.display = "none"; //html was sectioned out so I could disapper sections like this
   allQuestionsEl.style.display = "block";
   questionCount = 0;
   
   setTime();
   setQuestion(questionCount);
   
   
}
//function to show quesiton and go to then next one
function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        answerOne.textContent = questions[id].answers[0];
        answerTwo.textContent = questions[id].answers[1];
        answerThree.textContent = questions[id].answers[2];
        answerFour.textContent = questions[id].answers[3];
        
    }
    
}


function checkAnswer(event) {
    event.preventDefault();
    if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft -=10;
    }

    if (questionCount < questions.length) {
        questionCount++;
    }
    setQuestion(questionCount);
}

function addScore(event) {
    event.preventDefault();
    finalEl.style.display = "none";
    highscoresEl.style.display = "block";



    var userInitials = initialsInput.value;
    scoreList.push({ initials: userInitials, score: secondsLeft});

    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });

      //scoreList.textContent="";
      for (i = 0; i < scoreList.length; i++) {
          var li = document.createElement("li");
          li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
          scoreListEl.append(li);
      }

      //adding to local storage
      storeScores();
      displayScores();
      console.log(scoreList);
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    var storedScoreList = JSON.parse(localStorage.getItem("scoreList")); //parse incase someone puts extra spaces or a cat walks over the keyboard

    
    /*if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }*/
}

//EventListners for buttons

startBtn.addEventListener("click", startQuiz);

answerOne.addEventListener("click", checkAnswer);
answerTwo.addEventListener("click", checkAnswer);
answerThree.addEventListener("click", checkAnswer);
answerFour.addEventListener("click", checkAnswer);

/*answerBtn.forEach(item => {
    item.addEventListner('click', checkAnswer);
});*/

submitBtn.addEventListener("click", addScore);





//Code from previous attempts
/*//Questions for quiz

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
var answerFour = document.getElementsByClassName(ansFour); 
var beginEl = document.querySelector("#mainSpace");
var questionCount = 0;
var questionEl = document.querySelector("#questionSpot");
var answerOne = document.querySelector("#firstAnswer");
var answerTwo = document.querySelector("#secondAnswer");
var answerThree = document.querySelector("#thirdAnswer");
var answerFour = document.querySelector("#fourthAnswer"); */
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
