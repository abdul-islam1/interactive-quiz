const quizDB = [
  {
    question: " Q1: What is CSS?",
    a: "CSS is a style sheet language",
    b: "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
    c: "CSS is the language used to style the HTML documents",
    d: "All of the mentioned",
    ans: "ans4",
  },
  {
    question:
      " Q2: Which of the following CSS selector selects the elements that are checked?",
    a: "checked",
    b: "E ~ F",
    c: "after",
    d: "none of the mentioned",
    ans: "ans1",
  },

  {
    question:
      " Q3: Which of the following CSS property is used to specify table borders in CSS?",
    a: "table:border",
    b: "table",
    c: "border",
    d: "none of the mentioned",
    ans: "ans3",
  },
  {
    question:
      " Q4: Which of the following CSS Property sets the stacking order of positioned elements?",
    a: "y-index",
    b: "z-index",
    c: "x-index",
    d: "all of the mentioned",
    ans: "ans2",
  },
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#show-score");

const answers = document.querySelectorAll(".answer");

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  question.innerHTML = quizDB[questionCount].question;
  option1.innerHTML = quizDB[questionCount].a;
  option2.innerHTML = quizDB[questionCount].b;
  option3.innerHTML = quizDB[questionCount].c;
  option4.innerHTML = quizDB[questionCount].d;
};
loadQuestion();

const getCheckedAnswerID = () => {
  let answerID;

  answers.forEach((currentAnswerElement) => {
    if (currentAnswerElement.checked) {
      answerID = currentAnswerElement.id;
    }
  });
  return answerID;
};

submit.addEventListener("click", () => {
  const checkedAnswerID = getCheckedAnswerID();

  if (checkedAnswerID === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    document.getElementById("showScore").innerHTML = `Your score is: ${score}/${quizDB.length}`;
    
  }
});

var count = 0;
var intId = setInterval(counter,1000);
function counter(){
    document.getElementById("timer").innerHTML = ++count;

    if(count >=10){
        document.getElementById("showScore").innerHTML = `Your score is: ${score}/${quizDB.length}`;
        document.getElementById('submit').hidden = true;
        clearInterval(intId);
      
    }
}