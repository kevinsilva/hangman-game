import { getWords, chooseWord, convertWordToDashes } from './words.js';
import { chooseLetter } from './game.js';
import { renderMessage, renderState } from './render.js';
import { elementsIDS, addRestartEventListener } from './utilities.js';

async function init() {
  const WORDS = await getWords();
  const guessWord = chooseWord(WORDS);
  const dashedWord = convertWordToDashes(guessWord);

  const STATE = {
    WORDS,
    guessWord,
    dashedWord,
    guessedLetters: {
      correct: [],
      wrong: [],
    },
    attemptsLeft: 6,
    images: [],
    handleKeydown: (event) => chooseLetter(event, STATE, renderMessage),
  };

  console.log(STATE.guessWord);
  renderState(STATE, elementsIDS);
  addRestartEventListener(elementsIDS.restartID);

  document.addEventListener('keydown', STATE.handleKeydown);
}

export { init };
