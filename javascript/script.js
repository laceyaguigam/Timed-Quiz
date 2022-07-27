
var score = 0

var questions = [
    {
        prompt: "What does event.preventDefault() do?\n(a) It stops the browser from reloading the page upon a form submission.\n(b) It stops the browser from allowing the form submission event to occur.",
        answer: "a"
    },

    {
        prompt: "The browser event submit allows us to do the following:\n(a) Submit a form using a button\n(b) Submit a form using the Enter key\n(c) Submit a form using both a button and the Enter key",
        answer: "c"
    },

    {
        prompt: "How do we use JavaScript to get the information entered into a form's input field?\n(a) We can select the form's input element and use the value property to read its data\n(b) We can select the form itself and use the value property to read all of its data\n(c) We can select the form's input element and use the textContent or innerHTML properties to read its data",
        answer: "a"
    },

    {
        prompt: "In the DOM's event object, what does its target property refer to?\n(a) It refers to the HTML element that was interacted with to dispatch the event\n(b) It refers to the HTML element we want to affect as a result of our dispatched event.",
        answer: "a"
    },
]

for (var 1=0; i < questions.length, i++);
    var response = window.prompt(questions[i].prompt);