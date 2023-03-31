const quizData = [
    {
        question: "Commonly used data types DO NOT include:",
        a: "strings", 
        b: "booleans",
        c: "alerts",
        d: "numbers",
        answer: "c"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        a: "quotes", 
        b: "curly brackets", 
        c: "parentheses", 
        d: "square brackets",
        answer: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        a: "numbers and strings", 
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
        answer: "d"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parentheses",
        answer: "c"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "JavaScript",
        b: "terminal / bash",
        c: "for loops",
        d: "console.log",
        answer: "d"
    },
    {
        question: "What is the purpose of HTML?",
        a: "To define the presentation of a webpage",
        b: "To define the structure and content of a webpage",
        c: "To style the webpage with colors and fonts",
        d: " To add interactivity to the webpage",
        answer: "b"
    },
    {
        question: "Which HTML tag is used to link to an external stylesheet?",
        a: "<link>",
        b: "<script>",
        c: "<style>",
        d: "<a>",
        answer: "a"
    },
    {
        question: "What is the purpose of JavaScript?",
        a: "To define the structure and content of a webpage",
        b: "To style the webpage with colors and fonts",
        c: "To add interactivity to the webpage",
        d: "To create animations and graphics",
        answer: "c"
    },
    {
        question: "Which JavaScript function is used to add an event listener to an element?",
        a: "addEventListener()",
        b: "getElementById()",
        c: "appendChild()",
        d: "removeChild()",
        answer: "a"
    },
    {
        question: 'What is the purpose of the "this" keyword in JavaScript?',
        a: "It refers to the current HTML element",
        b: "It refers to the current CSS property",
        c: "It refers to the current JavaScript function",
        d: "It refers to the current JavaScript object",
        answer: "d"
    },
    {
        question: "Which JavaScript method is used to convert a string to a number?",
        a: "parseInt()",
        b: "toString()",
        c: "concat()",
        d: "slice()",
        answer: "a"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        a: "<a>",
        b: "<img>",
        c: "<p>",
        d: "<div>",
        answer: "a"
    },
    {
        question: "What is the purpose of the <head> element in HTML?",
        a: "To define the structure and content of the webpage",
        b: "To define the presentation of the webpage",
        c: "To define the metadata of the webpage",
        d: "To add interactivity to the webpage",
        answer: "c"
    },
    {
        question: "What is the correct syntax for adding an external CSS file to an HTML document?",
        a: '<link rel="stylesheet" type="text/css" href="styles.css">',
        b: '<style type="text/css">styles.css</style>',
        c: '<link type="text/css" rel="stylesheet" href="styles.css">',
        d: '<style rel="stylesheet" type="text/css">styles.css</style>',
        answer: "a"
    },
    {
        question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
        a: "var x = 10;",
        b: "let y = 20;",
        c: "const z = 30;",
        d: "variable w = 40;",
        answer: "d"
    },
    {
        question: "Which CSS property can be used to center an element horizontally?",
        a: "margin-left",
        b: "margin-right",
        c: "text-align",
        d: "justify-content",
        answer: "c"
    },
    {
        question: "Which JavaScript function is used to find the length of a string?",
        a: "length()",
        b: "size()",
        c: "count()",
        d: "find()",
        answer: "a"
    },
    {
        question: "Which JavaScript function is used to convert a string to uppercase?",
        a: "toUpperCase()",
        b: "toLowerCase()",
        c: "concat()",
        d: "replace()",
        answer: "a"
    },
    {
        question: "Which CSS property can be used to adjust the spacing between lines of text?",
        a: "line-height",
        b: "text-indent",
        c: "text-align",
        d: "letter-spacing",
        answer: "a"
    },
    {
        question: "What is React.js?",
        a: "A server-side web development language",
        b: "A client-side web development library",
        c: "A relational database management system",
        d: "A programming language for creating desktop applications",
        answer: "b"
    },
    {
        question: "What is a component in React.js?",
        a: "A JavaScript function that returns HTML code",
        b: "A JavaScript class that extends the React.Component class",
        c: "A variable that stores data for a React application",
        d: "An external library that can be used with React.js",
        answer: "b"
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        a: "push()",
        b: "pop()",
        c: "shift()",
        d: "unshift()",
    },
    {
        question: 'What does the "=== " operator do in JavaScript?',
        a: "It checks for equality of value but not type",
        b: "It checks for equality of value and type",
        c: "It checks for inequality of value and type",
        d: "It checks for inequality of value but not type",
        answer: "b"
    },
    {
        question: "Which of the following is NOT a valid way to create a function in JavaScript?",
        a: "function myFunc() {}",
        b: "const myFunc = function() {};",
        c: "const myFunc = () => {};",
        d: "let myFunc = {};",
        answer: "d"
    },
    {
        question: "What does the Array.map() method do in JavaScript?",
        a: "It modifies the original array",
        b: "It returns a new array with the same length as the original array, but with each element modified according to a provided function ",
        c: "It removes elements from an array",
        d: "It adds elements to an array",
        answer: "b"
    },


];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked)
        {
           answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitBtn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();
    
    console.log(answer);

    if(answer)
    {
        if (answer){
            if (answer === quizData[currentQuiz].answer)
            {
                score++;
            }
        }

        currentQuiz++;
        if (currentQuiz < quizData.length)
        {
            loadQuiz();
        }
        else
        {
        quiz.innerHTML = `
            <h2>Your score is ${score} out of ${quizData.length}questions.</h2>
            
            <button onclick="location.reload()">Reload</button>`;
        }
    }

});