const quizContainer = document.getElementById("quiz");
const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");
const questionText = document.getElementById("question");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const batmanImage = document.getElementById("batman-image");

/*demarer le quiz */

function startQuiz() {
  const quizStart = document.querySelector(".start-quiz");
  const btnStart = document.querySelector(".startBtn");

  quizStart.style.display = "none";
  btnStart.style.display = "none";
}

const questions = [
  {
    question: "Quel est le vrai nom de Batman ?",
    answers: {
      a: "Bruce Banner",
      b: "Clark Kent",
      c: "Bruce Wayne",
      d: "Peter Parker",
    },
    correctAnswer: "c",
  },
  {
    question: "Qui est le plus grand ennemi de Batman ?",
    answers: {
      a: "Le Joker",
      b: "Double-Face",
      c: "Bane",
      d: "Le Pingouin",
    },
    correctAnswer: "a",
  },
  {
    question: "Qui est le commissaire de police de Gotham City ?",
    answers: {
      a: "Harvey Dent",
      b: "James Gordon",
      c: "Edward Nygma",
      d: "Oswald Cobblepot",
    },
    correctAnswer: "b",
  },
  {
    question: "Qui est le meilleur ami de Batman ?",
    answers: {
      a: "Robin",
      b: "Superman",
      c: "Catwoman",
      d: "Alfred",
    },
    correctAnswer: "d",
  },
];

let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", startQuiz);

submitBtn.addEventListener("click", () => {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      setNextQuestion();
    } else {
      quizContainer.innerHTML = `<h2>Votre score est de ${score} / ${questions.length}</h2><button onclick="location.reload()">Recommencer</button>`;
    }
  }
});

function startQuiz() {
  startBtn.classList.add("hide");
  batmanImage.classList.add("hide");
  quizContainer.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionText.innerText = currentQuestionData.question;
  aText.innerText = currentQuestionData.answers.a;
  bText.innerText = currentQuestionData.answers.b;
  cText.innerText = currentQuestionData.answers.c;
  dText.innerText = currentQuestionData.answers.d;
}
