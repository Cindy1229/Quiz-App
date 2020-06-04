const startButton=document.getElementById('start-btn');
const questionContainerElement=document.getElementById('question-container');
const questionElement=document.getElementById('question');
const answerButtonsElement=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

function startGame() {
  console.log('started');
  startButton.classList.add('hide');
  shuffledQuestions=questions.sort(()=>Math.random()-0.5);
  currentQuestionIndex=0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
};


function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion(question){
  questionElement.innerText=question.question ;
  question.answers.forEach(answer => {
    const btn=document.createElement('button');
    btn.innerText=answer.text;
    btn.classList.add('btn');
    if(answer.correct){
      btn.dataset.correct=answer.correct;
    }
    btn.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(btn);
  });

}
function selectAnswer(e) {
  const selectedButton=e.target;
  const correct=selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });

};

function setStatusClass(element, correct){
  clearStatusClass(element);
  if(correct){
    element.classList.add('correct');
  }else {
    element.classList.add('wrong');
  }
};

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
};

function resetState() {
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
};

const questions=[
  {
    question: 'What is 2+2?',
    answers: [
      {text: '4', correct: true},
      {text: '22', correct: false}
    ]
  }
]
