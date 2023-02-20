var timerEl = document.getElementById('countdown');
var highScoreEl = document.getElementById('initials');
var startQuizEl = document.getElementById('start');
var questionDiv = document.getElementById('questionArea');



//click start button to begin, timer and questions start

var timeLeft = 30;
var questions = [
    {
        prompt: "What does event.preventDefault() do?",
        choices: [
            "It stops the browser from reloading the page upon a form submission.",
            "It stops the browser from allowing the form submission event to occur.", 
            
        ],
        answer: "It stops the browser from reloading the page upon a form submission."
    },
    {
        prompt: "The browser event submit allows us to do the following:",
        choices: [
            "Submit a form using a button",
            "Submit a form using the Enter key",
            "Submit a form using both a button and the Enter key",
        ],
        answer: "Submit a form using both a button and the Enter key"
    },
    {
        prompt: "How do we use JavaScript to get the information entered into a form's input field?",
        choices: [
            "We can select the form's input element and use the value property to read its data",
            "We can select the form itself and use the value property to read all of its data",
            "We can select the form's input element and use the textContent or innerHTML properties to read its data",
        ],
        answer: "We can select the form's input element and use the value property to read its data"
    },
    {
        prompt: "In the DOM's event object, what does its target property refer to?",
        choices: [
            "It refers to the HTML element that was interacted with to dispatch the event",
            "It refers to the HTML element we want to affect as a result of our dispatched event",
        ],
        answer: "It refers to the HTML element that was interacted with to dispatch the event"
    },
    
]



var currentQuestion = 0;

function quizStarts() {
    timeLeft = 30;
    countdown();
    currentQuestion = 0;
    showQuestions();
}

// answer question then given another question

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


// answer question wrong, time subtracted from clock

function checkAnswer(event) {
    var userChoice = event.target.textContent;

    if(userChoice == questions[currentQuestion].answer) {
        console.log("Correct!")
    } 
    else {
        timerEl.textContent = ' ';  //work on taking time away
        console.log("Wrong!")
        timeLeft = timeLeft -10  //subtracts time for wrong answer
    }

    currentQuestion++;
    if(currentQuestion < questions.length) {
        showQuestions()
    }
}

// timer 
//when all question answered or timer reaches 0, quiz over

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

        else  {
            timerEl.textContent = '';
            cleartInterval(timeInterval);
            endGame();  //ends the game at zero to input initials, need to add endGame function
        }
    }, 1000);
}

//when quiz over, can save initials and score

function endGame () {


}



// local storage basic code

localStorage.setItem(" ", JSON.stringify());

//work on this, it broke the code, doesnt matter if its at the top of the code or the bottom 

//localStorage.getItem("initials", JSON.stringify(initials));

// start button

startQuizEl.addEventListener("click", quizStarts)
















































