const yesBtn = document.getElementById("yes-btn");
const door = document.getElementById("door");
const question = document.getElementById("question");
const questionContainer = document.getElementById("question-container");


let scale = 1.2;
let questionIndex = 0;

const questions = [
  "Are you sure you want the answer?",
  "Will you still want it after seeing it?",
  "Can you handle the truth?",
  "Is this your final click?",
  "Click wisely...",
  "Still want it?",
  "Will the truth set you free?",
  "Are you prepared for the consequences?",
  "Once you know, you can’t un-know...",
  "Is curiosity your strength or your weakness?",
  "How deep does your need for answers go?",
  "Is this curiosity... or obsession?",
  "Answers come with a price. Still in?",
  "What if it changes everything?",
  "Are you brave enough to find out?",
  "You’ve almost reached the point of no return...",
  "One more click… are you ready for that?"
];

yesBtn.addEventListener("click", () => {

  questionIndex = (questionIndex + 1) % questions.length;
  question.textContent = questions[questionIndex];
  scale *= 1.2;
  yesBtn.style.transform = `scale(${scale})`;
  const btnWidth = yesBtn.offsetWidth * scale;
  const btnHeight = yesBtn.offsetHeight * scale;
  const questionRect = question.getBoundingClientRect();
  const safeTop = questionRect.bottom + 20;
  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;
  let randX = Math.random() * maxX;
  let randY = Math.random() * (maxY - safeTop) + safeTop;
  yesBtn.style.left = `${randX}px`;
  yesBtn.style.top = `${randY}px`;

  if (scale >= 19) {
    yesBtn.style.display = "none";
    door.style.display = "block";
  }
});

door.addEventListener("click", () => {
  window.location.href = "answer.html";
});

