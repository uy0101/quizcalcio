// Logica del Quiz sul Calcio (500 domande)
// Memorizza top 5 online su Google Sheets via Apps Script (JSONP/POST no-cors)

const STORAGE_KEY = 'quizTopScoresLocal';
// Sostituisci con l'URL /exec della tua Web App quando sarà pronta
const API_URL = 'PASTE_EXEC_URL_HERE';

let playerName = '';
let score = 0;
let wrongStreak = 0;
let selectedQuestions = [];
let currentIndex = 0;
let answersLog = [];

// DOM
const startScreen = document.getElementById('start-screen');
const playerInput = document.getElementById('player-name');
const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const playerLabel = document.getElementById('player-label');
const scoreLabel = document.getElementById('score');
const progressLabel = document.getElementById('question-index');
const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');
const feedbackDiv = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const summarySection = document.getElementById('summary');
const summaryPlayer = document.getElementById('summary-player');
const summaryScore = document.getElementById('summary-score');
const listCorrect = document.getElementById('list-correct');
const listWrong = document.getElementById('list-wrong');
const playAgainBtn = document.getElementById('play-again-btn');

function randInt(max){ return Math.floor(Math.random()*max); }

function pickProgressiveQuestions(pool){
  // 10 domande: una per ogni livello 1..10
  const out = [];
  for(let level=1; level<=10; level++){
    const candidates = pool.filter(q => q.difficulty === level);
    const chosen = candidates[randInt(candidates.length)];
    out.push(chosen);
  }
  return out;
}

function resetGame(){
  score = 0; wrongStreak = 0; currentIndex = 0; answersLog = [];
  selectedQuestions = pickProgressiveQuestions(QUESTIONS_POOL);
  scoreLabel.textContent = score; feedbackDiv.textContent = ''; nextBtn.disabled = true;
  progressLabel.textContent = '1';
}

function startGame(){
  playerName = (playerInput.value || '').trim();
  if(!playerName){ alert('Inserisci il tuo nome'); return; }
  startScreen.classList.add('hidden'); quizContainer.classList.remove('hidden');
  playerLabel.textContent = `Giocatore: ${playerName}`; resetGame(); renderQuestion();
}

function renderQuestion(){
  const q = selectedQuestions[currentIndex];
  questionText.textContent = q.question;
  answersDiv.innerHTML = ''; feedbackDiv.textContent=''; nextBtn.disabled=true;
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn'; btn.textContent = opt;
    btn.addEventListener('click', () => onAnswer(idx));
    answersDiv.appendChild(btn);
  });
}

function onAnswer(chosenIndex){
  const q = selectedQuestions[currentIndex];
  const correct = q.correctIndex === chosenIndex;
  const buttons = Array.from(answersDiv.querySelectorAll('button'));
  buttons.forEach((b, idx) => { b.disabled = true; if(idx===q.correctIndex) b.classList.add('correct'); if(idx===chosenIndex && !correct) b.classList.add('wrong'); });

  if(correct){
    score += 1; wrongStreak = 0; feedbackDiv.textContent = 'Corretto! +1 punto';
  } else {
    wrongStreak += 1;
    if(wrongStreak === 1){
      feedbackDiv.textContent = 'Sbagliato. 0 punti (primo errore consecutivo)';
    } else {
      score = Math.max(0, score - 1);
      feedbackDiv.textContent = 'Sbagliato. -1 punto per errore consecutivo';
    }
  }
  scoreLabel.textContent = score; nextBtn.disabled = false;
  answersLog.push({ question:q.question, chosenText:q.options[chosenIndex], correctText:q.options[q.correctIndex], isCorrect:correct });
}

function nextQuestion(){
  if(currentIndex < 9){ currentIndex += 1; progressLabel.textContent = String(currentIndex+1); renderQuestion(); }
  else { endGame(); }
}

function endGame(){
  quizContainer.classList.add('hidden'); summarySection.classList.remove('hidden');
  summaryPlayer.textContent = playerName; summaryScore.textContent = score;
  listCorrect.innerHTML=''; listWrong.innerHTML='';
  answersLog.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>Q:</strong> ${item.question}<br><strong>Risposta:</strong> ${item.chosenText}`;
    if(item.isCorrect){ listCorrect.appendChild(li); }
    else { const li2 = document.createElement('li'); li2.innerHTML = `<strong>Q:</strong> ${item.question}<br><strong>Tua risposta:</strong> ${item.chosenText}<br><strong>Corretta:</strong> ${item.correctText}`; listWrong.appendChild(li2); }
  });
  // Salva online (POST no-cors)
  saveTopScore(playerName, score);
}

async function saveTopScore(name, score){
  try{
    await fetch(API_URL, {
      method:'POST',
      mode:'no-cors',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify({ name, score })
    });
  }catch(e){ console.warn('Errore salvataggio remoto:', e); }
}

function playAgain(){ summarySection.classList.add('hidden'); startScreen.classList.remove('hidden'); playerInput.value=''; }

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextQuestion);
playAgainBtn.addEventListener('click', playAgain);
