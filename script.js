const yesBtn = document.getElementById("yes-btn");
const question = document.getElementById("question");
const questionContainer = document.getElementById("question-container");
const doorGrid = document.getElementById("door-grid");

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

  requestAnimationFrame(() => {
    const btnRect = yesBtn.getBoundingClientRect();
    const questionRect = question.getBoundingClientRect();
    const safeTop = questionRect.bottom + 20;

    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    let randX = Math.random() * maxX;
    let randY = Math.random() * (maxY - safeTop) + safeTop;

    randX = Math.max(0, Math.min(randX, maxX));
    randY = Math.max(safeTop, Math.min(randY, maxY));

    yesBtn.style.position = "absolute";
    yesBtn.style.left = `${randX}px`;
    yesBtn.style.top = `${randY}px`;

    if (scale >= 20) {
      yesBtn.style.display = "none";
      revealDoors();
    }
  });
});

function revealDoors() {
  questionContainer.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling if needed
  doorGrid.style.display = "grid";
  doorGrid.innerHTML = ""; // Clear any existing doors

  // Create 15 doors in the grid
  for (let i = 0; i < 9; i++) {
    const door = document.createElement("div");
    door.classList.add("door");

    // Add a click event listener to each door
    door.addEventListener("click", () => {
      if (i === 6) {  // 12th door (index 11) is the correct answer
        window.location.href = "answer.html";  // Redirect to answer page
      } else {
        alert("Wrong door. Try another one!");
      }
    });

    // Append each door to the grid
    doorGrid.appendChild(door);
  }
}

