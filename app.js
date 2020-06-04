const startButton=document.getElementById('start-btn');
const questionContainerElement=document.getElementById('question-container');
const questionElement=document.getElementById('question');
const answerButtonsElement=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', ()=>{
  currentQuestionIndex++;
  setNextQuestion();
});
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
  if(shuffledQuestions.length>currentQuestionIndex+1){
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText='Restart';
    startButton.classList.remove('hide');
  }


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
    question: 'The river Seine in Paris is longer than the river Thames in London',
    answers: [
      {text: 'Yes', correct: true},
      {text: 'No', correct: false}
    ]
  },

  {
    question: 'Madonna\'s real name is Madonna',
    answers: [
      {text: 'Yes', correct: true},
      {text: 'No', correct: false}
    ]
  },

  {
    question: 'Cinderella was the first Disney princess',
    answers: [
      {text: 'Yes', correct: false},
      {text: 'No', correct: true}
    ]
  },

  {
    question: 'In Harry Potter, Draco Malfoy has no siblings',
    answers: [
      {text: 'Yes', correct: false},
      {text: 'No', correct: true}
    ]
  },

  {
    question: 'There are 219 episodes of Friends',
    answers: [
      {text: 'Yes', correct: false},
      {text: 'No', correct: true}
    ]
  },

  {
    question: 'A lion\'s roar can be heard up to eight kilometres away',
    answers: [
      {text: 'Yes', correct: true},
      {text: 'No', correct: false}
    ]
  },

  {
    question: 'Monaco is the smallest country in the world',
    answers: [
      {text: 'Yes', correct: false},
      {text: 'No', correct: true}
    ]
  },

  {
    question: "Idina Menzel sings 'let it go' 20 times in 'Let It Go' from Frozen",
    answers: [
      {text: 'Yes', correct: false},
      {text: 'No', correct: true}
    ]
  },










]
