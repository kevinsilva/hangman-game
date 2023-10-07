import { renderState } from './render.js';
import {
  guessLetter,
  revealChosenLetter,
  elementsIDS,
  showRestartButton,
} from './utilities.js';

const chooseLetter = (event, state, handleMessage) => {
  const letter = event.key.toLowerCase();
  const isLetterValid = letter.length === 1 && letter.match(/[a-z]/i);

  handleMessage('');

  if (!isLetterValid) handleMessage('Please enter a valid letter');
  else checkGuess(state, letter, handleMessage);
};

const checkGuess = (state, letter, handleMessage) => {
  if (!state) throw new Error('State is required');
  if (
    state.guessedLetters.correct.includes(letter) ||
    state.guessedLetters.wrong.includes(letter)
  ) {
    handleMessage('You already guessed that letter');
    return;
  }

  updateGameState(state, letter);
  updateGameStatus(state, handleMessage, removeEventListener);
  renderState(state, elementsIDS);
};

const updateGameState = (state, letter) => {
  const isGuessCorrect = guessLetter(state.guessWord, letter);

  if (isGuessCorrect) {
    state.guessedLetters.correct.push(letter);
    state.dashedWord = revealChosenLetter(
      state.guessWord,
      state.dashedWord,
      letter
    );
  } else {
    state.guessedLetters.wrong.push(letter);
    state.attemptsLeft--;
  }
};

const updateGameStatus = (state, handleMessage) => {
  if (state.attemptsLeft === 0) {
    handleMessage('Game Over');
    document.removeEventListener('keydown', state.handleKeydown);
    showRestartButton(elementsIDS.restartID);
  } else if (!state.dashedWord.includes('_')) {
    handleMessage('You Won!');
    document.removeEventListener('keydown', state.handleKeydown);
    showRestartButton(elementsIDS.restartID);
  }
};

export { chooseLetter };
