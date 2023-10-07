const renderMessage = (message, elementID = 'message') => {
  document.getElementById(elementID).innerHTML = message;
};

const renderArray = (element, elementID) => {
  document.getElementById(elementID).innerHTML = element.join(' ');
};

const renderImage = (attemptsLeft, elementIDS) => {
  switch (attemptsLeft) {
    case 6:
      break;
    case 5:
      document.getElementById(elementIDS.headID).style.visibility = 'visible';
      break;
    case 4:
      document.getElementById(elementIDS.torsoID).style.visibility = 'visible';
      break;
    case 3:
      document.getElementById(elementIDS.leftArmID).style.visibility =
        'visible';
      break;
    case 2:
      document.getElementById(elementIDS.rightArmID).style.visibility =
        'visible';
      break;
    case 1:
      document.getElementById(elementIDS.leftLegID).style.visibility =
        'visible';
      break;
    case 0:
      document.getElementById(elementIDS.rightLegID).style.visibility =
        'visible';
      break;
    default:
      console.error('Invalid attempts value');
      break;
  }
};

const renderState = (state, elementsIDS) => {
  const { dashedID, wrongsID } = elementsIDS;

  renderArray(state.dashedWord, dashedID);
  renderArray(state.guessedLetters.wrong, wrongsID);
  renderImage(state.attemptsLeft, elementsIDS);

  if (state.attemptsLeft === 0) {
    renderMessage(state.guessWord, 'dashed');
  }
};

export { renderMessage, renderArray, renderState };
