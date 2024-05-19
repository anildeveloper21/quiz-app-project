let quiz = [
  {
    question: "Who is the prime minister of india?",
    ans1text: "Rahul Gandhi",
    ans2text: "Narendra modi",
    ans3text: "Amit Shah",
    ans4text: "Virat Kohli",
    answer: "Narendra modi",
  },
  {
    question: "Who is the cheif minister of uttar pradesh?",
    ans1text: "Sonia Gandhi",
    ans2text: "Narendra modi",
    ans3text: "Jayant Chaudhary",
    ans4text: "Yogi Adityanath",
    answer: "Yogi Adityanath",
  },
  {
    question: "What comes in full stack development?",
    ans1text: "Frontend",
    ans2text: "Backend",
    ans3text: "Design",
    ans4text: "Both A & B",
    answer: "Both A & B",
  },
  {
    question: "Samsung S24 ultra brand belongs which country?",
    ans1text: "South Korea",
    ans2text: "China",
    ans3text: "USA",
    ans4text: "India",
    answer: "South Korea",
  },
];

let question = document.getElementById("quiz-question");
let option_a = document.getElementById("text_option_a");
let option_b = document.getElementById("text_option_b");
let option_c = document.getElementById("text_option_c");
let option_d = document.getElementById("text_option_d");

let answerElement = document.querySelectorAll(".answer");

let submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

// console.log(quiz[currentQuestion].question);
// console.log(quiz[currentQuestion].ans1text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

console.log(answerElement);

submit.addEventListener("click", () => {
  // answerElement.forEach((answer) => {
  //     console.log(answer.checked);
  // })
  let checkedAns = document.querySelector('input[type="radio"]:checked');
  console.log(checkedAns);
  // console.log(checkedAns.nextElementSibling.textContent);

  if (checkedAns == null) {
    alert("please select an answer");
  } else {
    if (
      checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer
    ) {
      score++;
    }
    checkedAns.checked = false;
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      question.textContent = quiz[currentQuestion].question;
      option_a.textContent = quiz[currentQuestion].ans1text;
      option_b.textContent = quiz[currentQuestion].ans2text;
      option_c.textContent = quiz[currentQuestion].ans3text;
      option_d.textContent = quiz[currentQuestion].ans4text;
      checkedAns.checked = false;
    }
    else{
        alert("Your score is " + score + " out of " + quiz.length);
        location.reload();
    }
  }
});
