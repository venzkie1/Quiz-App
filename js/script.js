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
        question: "HTML Question: Which attribute is used to specify the target of a hyperlink?",
        a: "href",
        b: "target",
        c: "link",
        d: "rel",
        answer: "b"
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
        question: "Which property is used to control the space between elements?",
        a: "margin",
        b: "padding",
        c: "border",
        d: "float",
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
        question: 'JavaScript Question: What does the "typeof" operator return?',
        a: 'Number',
        b: 'Boolean',
        c: 'Object',
        d: 'String',
        answer: "c"
    },
    {
        question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
        a: "var x = 10;",
        b: "let y = 20;",
        c: "const z = 30;",
        d: "variable w = 40;",
        answer: "d"
    },
];
const inform = document.getElementById('info');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const resultBtn = document.getElementById("result");

let currentQuiz = 0;
let score = 0;
let correctAnswers = [];

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    console.log(currentQuizData);

    questionEl.innerText = `${currentQuiz+1}/15.) ${currentQuizData.question}`;
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
                correctAnswers.push(true);
            }
            else{
                correctAnswers.push(false);
            }
        }

        currentQuiz++;
        if (currentQuiz < quizData.length)
        {
            loadQuiz();
        }
        else
        {
        let resultHtml = `<h2 class="your-result">You correctly answered ${score} out of ${quizData.length} questions.</h2>`;
        
        for (let i=0; i<quizData.length; i++){
            let correct = quizData[i].answer;
            let userAnswer = correctAnswers[i] ? quizData[i][correct] : getSelected();
            resultHtml += `<div class="result-item">
                <p>${i + 1}.) ${quizData[i].question}</p>
                <p><strong>Correct answer:</strong> ${correct}.) ${quizData[i][correct]}</p>
                <p><strong>Your answer:</strong> ${userAnswer || '-'}</p>
            </div>`;
        }

        quiz.innerHTML = resultHtml;
        resultBtn.style.display = "block";
        submitBtn.style.display = "none";
        }
    }

});

resultBtn.addEventListener("click", () => {
    location.reload();
});