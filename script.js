const quizData = [
  {
    question: "Quel est l’autre nom de l’Homme-Mystère ?",
    a: "Le  Sphinx",
    b: "Saphir",
    c: "Le  Joker",
    correct: "a",
  },
  {
    question: "Quelle est l’ancienne profession de Harley Quinn ?",
    a: "Infirmière",
    b: "Psychiatre",
    c: "Dentiste",
    correct: "b",
  },
  {
    question: "Quel est l’objet fétiche de Double Face ?",
    a: "Une pièce",
    b: "Un livre",
    c: "Un couteau",
    correct: "a",
  },
  {
    question: "Qui a produit Batman en 1964 ?",
    a: "Stanley Kubrick",
    b: "Andy Warhol",
    c: "Peter Jackson",
    correct: "b",
  },
  {
    question: "Batman c’est aussi le nom d’une ville en...",
    a: "Turquie",
    b: "Islande",
    c: "Allemagne",
    correct: "a",
  },
  {
    question: "Quel vilain apparaît pour la première fois dans le Batman 232 ?",
    a: "Le Pingouin",
    b: "Ra’s al Ghul",
    c: "Poison Ivy",
    correct: "",
  },
  {
    question: "Quelle ville Batman défend-il ?",
    a: "Gotham City",
    b: "Starling City",
    c: "Hell’s Kitchen",
    correct: "a",
  },

  {
    question: "Tim Burton a réalisé deux Batman, qui jouait Batman ?",
    a: "Georges Clooney",
    b: "Val Kilmer",
    c: "Mickael Keaton",
    correct: "c",
  },
  {
    question: "Dans son premier Batman (1989) Jack Nicholson jouait :",
    a: "Le Pingouin",
    b: "L’Homme Mystère",
    c: "Le Joker",
    correct: "c",
  },
  {
    question: "Qui est Jonathan Crane ?",
    a: "L’Épouvantail",
    b: "Le Joker",
    c: "Hugo  Strange",
    correct: "a",
  },
  {
    question:
      "Qui  est  l’interprète  de  Catwoman  dans  le  nouveau Batman de Matt Reeves (2022) ?",
    a: "Emma Watson",
    b: "Gigi Hadid",
    c: "Zoë Kravitz",
    correct: "c",
  },
  {
    question: "Quel est le prénom des parents du jeune Bruce Wayne ?",
    a: "Thomas et Martha",
    b: "Elaine et Georges",
    c: "Martha et James",
    correct: "a",
  },
  {
    question: "Qui interprète le Joker en 2008 ?",
    a: "Heather Legder",
    b: "Haeth Ledger",
    c: "Heath Ledger",
    correct: "c",
  },
  {
    question: "En quelle année Robin fait il sa première apparition ?",
    a: "1940",
    b: "1936",
    c: "1941",
    correct: "a",
  },
  {
    question: "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
    a: "Oracle",
    b: "Huntress",
    c: "Black  Canary",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submitBtn");
const questionNumber = document.getElementById("progress");

// demarer le quiz

function startQuiz() {
  const quizStart = document.querySelector(".start-quiz");
  const btnStart = document.querySelector(".startBtn");
  const showFirstQue = document.querySelector(".quiz-container");

  quizStart.style.display = "none";
  btnStart.style.display = "none";
  showFirstQue.style.display = "flex";
}

// la partie quiz

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

  const currentQuestionNumber = currentQuiz + 1;
  const totalQuestions = quizData.length;
  questionNumber.innerText = ` ${currentQuestionNumber} / ${totalQuestions}`;
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

    // Résultat du quiz

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (score >= 15) {
        quiz.innerHTML = `
          <h2> ${score} / ${quizData.length} Bravo !</h2>
          <p>Vous êtes véritablement un super fan de l'univers de Batman ! 
          Comics, films, rien ne vous échappe. Bruce Wayne a de quoi être fier, Gotham est en paix
          et Batman peut prendre sa retraite, vous veillez aux grains !</p>
          <button onclick="location.reload()">Recommencer le Quiz</button>
        `;
      } else if (score >= 10) {
        quiz.innerHTML = `
          <h2> ${score} / ${quizData.length} Pas mal</h2>
          <p>Encore un peu d'entrainement avec le Chevalier Noir vous serait bénéfique, 
          mais vous pouvez marcher la tête haute vos connaissances sont là.
          A vous de les consolider, foncez, Goham est votre terrain de chasse !</p>
          <button onclick="location.reload()">Recommencer le Quiz</button>
        `;
      } else if (score >= 5) {
        quiz.innerHTML = `
          <h2>${score} / ${quizData.length} C'est pas tout à fait ça...</h2>
          <p>Oula ! Heureusement que le Riddler est sous les verrous... Il faut que vous vous repassiez les films,
          cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! Aller, rien n'est perdu !</p>
          <button onclick="location.reload()">Recommencer le Quiz</button>
        `;
      } else {
        quiz.innerHTML = `
          <h2> ${score} / ${quizData.length} C'est pas tout à fait ça...</h2>
          <p>Oula ! Heureusement que le Riddler est sous les verrous... Il faut que vous vous repassiez les films,
          cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! Aller, rien n'est perdu !</p>
          <button onclick="location.reload()">Recommencer le Quiz</button>
        `;
      }
    }
  }
});

const images = document.querySelectorAll("#galery img");
let imgActive = 0;

// Masquer les images sauf la première
for (let i = 1; i < images.length; i += 1) {
  images[i].classList.add("hidden");
}

// Clic sur le bouton question suivante
document.querySelector("#submitBtn").addEventListener("click", function () {
  images[imgActive].classList.add("hidden");
  imgActive += 1;
  images[imgActive].classList.remove("hidden");
});

// pour scroller la page de haut en bas
const scrollBtnUp = document.querySelector(".scroll img:first-of-type");
const scrollBtnDown = document.querySelector(".scroll img:last-of-type");

scrollBtnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollBtnDown.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});
