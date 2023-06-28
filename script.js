const quizData = [
  {
    number: "1/15",
    question: "Quel est l’autre nom de l’Homme-Mystère ?",
    a: "Le  Sphinx",
    b: "Saphir",
    c: "Le  Joker",
    correct: "a",
  },
  {
    number: "2/15",
    question: "Quelle est l’ancienne profession de Harley Quinn ?",
    a: "Infirmière",
    b: "Psychiatre",
    c: "Dentiste",
    correct: "b",
  },
  {
    number: "3/15",
    question: "Quel est l’objet fétiche de Double Face ?",
    a: "Une pièce",
    b: "Un livre",
    c: "Un couteau",
    correct: "a",
  },
  {
    number: "4/15",
    question: "Quelle ville Batman défend-il ?",
    a: "Gotham City",
    b: "Starling City",
    c: "Hell’s Kitchen",
    correct: "a",
  },
  {
    number: "5/15",
    question: "Tim Burton a réalisé deux Batman, qui jouait Batman ?",
    a: "Georges Clooney",
    b: "Val Kilmer",
    c: "Mickael Keaton",
    correct: "c",
  },
  {
    number: "6/15",
    question: "Dans son premier Batman (1989) Jack Nicholson jouait :",
    a: "Le Pingouin",
    b: "L’Homme Mystère",
    c: "Le Joker",
    correct: "c",
  },
  {
    number: "7/15",
    question: "Quel est le prénom des parents du jeune Bruce Wayne ?",
    a: "Thomas et Martha",
    b: "Elaine et Georges",
    c: "Martha et James",
    correct: "a",
  },
  {
    number: "8/15",
    question: "Qui interprète le Joker en 2008 ?",
    a: "Heather Legder",
    b: "Haeth Ledger",
    c: "Heath Ledger",
    correct: "c",
  },
  {
    number: "9/15",
    question: "En quelle année Robin fait il sa première apparition ?",
    a: "1940",
    b: "1936",
    c: "1941",
    correct: "a",
  },
  {
    number: "10/15",
    question: "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
    a: "Oracle",
    b: "Huntress",
    c: "Black  Canary",
    correct: "b",
  },
  {
    number: "11/15",
    question: "Qui est Jonathan Crane ?",
    a: "L’Épouvantail",
    b: "Le Joker",
    c: "Hugo  Strange",
    correct: "a",
  },
  {
    number: "12/15",
    question: "Batman c’est aussi le nom d’une ville en...",
    a: "Turquie",
    b: "Islande",
    c: "Allemagne",
    correct: "a",
  },
  {
    number: "13/15",
    question: "Qui a produit Batman en 1964 ?",
    a: "Stanley Kubrick",
    b: "Andy Warhol",
    c: "Peter Jackson",
    correct: "b",
  },
  {
    number: "14/15",
    question: "Quel vilain apparaît pour la première fois dans le Batman 232 ?",
    a: "Le Pingouin",
    b: "Ra’s al Ghul",
    c: "Poison Ivy",
    correct: "",
  },
  {
    number: "15/15",
    question:
      "Qui  est  l’interprète  de  Catwoman  dans  le  nouveau Batman de Matt Reeves (2022) ?",
    a: "Emma Watson",
    b: "Gigi Hadid",
    c: "Zoë Kravitz",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submitBtn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>
        `;
    }
  }
});
