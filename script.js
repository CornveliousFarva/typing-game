const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
  ];

//Initialize word
let randomWord;

//Initialize score
let score = 0;

//Initialize time
let time = 10;

//Set difficulty to value in ls or medium
let difficulty =
    localStorage.getItem('difficulty') !== null
    ? localStorage.getItem(difficulty)
    : medium;

//Focus on text at the start
text.focus();

//Start countdown
const timeInterval = setInterval(updateTime, 1000)

//Generate random word from array
function getRandomWord(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord
}

//Add word to DOM
function addWordToDOM(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

