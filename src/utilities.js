const guessLetter = (word, letter) => {
  return word.includes(letter);
};

const revealChosenLetter = (word, dashes, letter) => {
  const wordArray = word.split('');
  const copyDashes = [...dashes];

  wordArray.forEach((character, index) => {
    if (character === letter) copyDashes[index] = letter;
  });

  return copyDashes;
};

const showRestartButton = (buttonID) => {
  document.getElementById(buttonID).style.display = 'block';
};

const addRestartEventListener = (buttonID) => {
  document.getElementById(buttonID).addEventListener('click', () => {
    window.location.reload();
  });
};

const elementsIDS = {
  dashedID: 'dashed',
  wrongsID: 'wrongs',
  restartID: 'restart',
  headID: 'head',
  torsoID: 'torso',
  leftArmID: 'left-arm',
  rightArmID: 'right-arm',
  leftLegID: 'left-leg',
  rightLegID: 'right-leg',
};

const defaultWords = ['tiger', 'guitar', 'book', 'football', 'sky'];

export {
  guessLetter,
  revealChosenLetter,
  elementsIDS,
  showRestartButton,
  addRestartEventListener,
  defaultWords,
};
