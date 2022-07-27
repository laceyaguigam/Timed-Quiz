
var timerEl = document.getElementById('countdown');
var highScoreEl = document.getElementById('high-scores');
var startQuizEl = document.getElementById('start');
var questionDiv = document.getElementById('questionArea');

//click start button to begin, timer and questions start
var timeLeft = 60;
var questions = [
    {
        prompt: "Who are you?",
        choices: [
            "Andres",
            "Lacey",
            "David"
        ],
        ans: "Lacey"
    },
    {
        prompt: "When is this?",
        choices: [
            "2020",
            "2022",
            "3022"
        ],
        ans: "2022"
    }
]
var currentQuestion = 0;

function quizStarts() {
    timeLeft = 60;
    countdown();
    currentQuestion = 0;
    showQuestions();
}
// answer question then given another question

// answer question wrong, time subtracted from clock

//when all question answered or timer reaches 0, quiz over

//when quiz over, can save initials and score

function showQuestions () {
    questionDiv.innerHTML = "";
    var newPrompt = document.createElement("h2");
    newPrompt.textContent = questions[currentQuestion].prompt

    questionDiv.appendChild(newPrompt);

    for(i=0; i<questions[currentQuestion].choices.length; i++) {
        var newBtn = document.createElement("button");
        newBtn.textContent = questions[currentQuestion].choices[i];

        newBtn.addEventListener("click", checkAnswer)
        questionDiv.appendChild(newBtn)
    }

}

function checkAnswer(event) {
    var userChoice = event.target.textContent;

    if(userChoice == questions[currentQuestion].ans) {
        console.log("yo dis bussin'")
    }else {
        console.log("that's cap")
    }

    currentQuestion++;
    if(currentQuestion < questions.length) {
        showQuestions()
    }
}

// timer basic code

function countdown () {

    var timeInterval = setInterval (function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }

        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;  
        }

        else {
            timerEl.textContent = '';
            cleatInterval(timeInterval);
            // displayMessage();
        }
    }, 1000);
}




// local storage basic code

localStorage.setItem(" ", JSON.stringify());


// button basic code 

startQuizEl.addEventListener("click", quizStarts)

// highScore.addEventListener("click", function(event))










// // questions/answers for quiz

//  "What does event.preventDefault() do?
//  (a) It stops the browser from reloading the page upon a form submission.
//  (b) It stops the browser from allowing the form submission event to occur."
//  answer: "a"
  
   
//  The browser event submit allows us to do the following:
//  (a) Submit a form using a button
//  (b) Submit a form using the Enter key
//  (c) Submit a form using both a button and the Enter key
//  answer: "c"
   

//   "How do we use JavaScript to get the information entered into a form's input field?
//   (a) We can select the form's input element and use the value property to read its data
//   (b) We can select the form itself and use the value property to read all of its data
//   (c) We can select the form's input element and use the textContent or innerHTML properties to read its data
//   answer: "a"
 

//   "In the DOM's event object, what does its target property refer to?
//   (a) It refers to the HTML element that was interacted with to dispatch the event
//   (b) It refers to the HTML element we want to affect as a result of our dispatched event
// answer: "a"




































//var score = 0

//var questions = [
   // {
       // prompt: "What does event.preventDefault() do?\n(a) It stops the browser from reloading the page upon a form submission.\n(b) It stops the browser from allowing the form submission event to occur.",
       // answer: "a"
   // },

    //{
       // prompt: "The browser event submit allows us to do the following:\n(a) Submit a form using a button\n(b) Submit a form using the Enter key\n(c) Submit a form using both a button and the Enter key",
       // answer: "c"
    //},

    //{
       // prompt: "How do we use JavaScript to get the information entered into a form's input field?\n(a) We can select the form's input element and use the value property to read its data\n(b) We can select the form itself and use the value property to read all of its data\n(c) We can select the form's input element and use the textContent or innerHTML properties to read its data",
       // answer: "a"
    //},

   // {
       // prompt: "In the DOM's event object, what does its target property refer to?\n(a) It refers to the HTML element that was interacted with to dispatch the event\n(b) It refers to the HTML element we want to affect as a result of our dispatched event.",
       // answer: "a"
    //},
//]

//for (var 1=0; i < questions.length, i++); { 
    //var response = window.prompt(questions[i].prompt);

   // if(response == questions [i].answer) {
       // score ++;
       // alert("correct");
    //} else ("wrong");


//}
    